import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient } from "@apollo/react-hooks";
import { getAllRegionsDivisionsAndTownsQuery } from "../queries&Mutations&Functions/Queries";
import tableIcons from "../utils/icons/tableIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  head: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
  },
}));

const SubDivisionList = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [state, setState] = useState({
    columns: [
      {
        field: "regName",
        title: "Region Name",
      },
      {
        field: "regCode",
        title: "Region Code",
        grouping: false,
      },
      { field: "divName", title: "Division Name" },
      { field: "divCode", title: "Division Code", grouping: false },
      { field: "subDivName", title: "Nom Arrond" },
      { field: "subDivCode", title: "Code Arrond", grouping: false },
    ],
    data: [],
  });

  const loadDivisionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsDivisionsAndTownsQuery,
    });
    const { regions } = { ...data };

    const getSubDivisions = regions.map((item) => {
      const divInfos = item.division.map((division) => {
        const subDivInfos = division.subDivision.map((subDivision) => ({
          regName: item.regName,
          regCode: item.regCode,
          divName: division.divName,
          divCode: division.divCode,
          ...subDivision,
        }));
        return subDivInfos;
      });
      return divInfos;
    });

    setState((prev) => ({ ...prev, data: getSubDivisions.flat(2) }));
  };

  useEffect(() => {
    loadDivisionData();

    console.log(state.data);
  }, []);

  console.dir(state.data);
  return (
    <Paper className={classes.root}>
      <div>
        <MaterialTable
          className={classes.head}
          components={{
            Toolbar: (props) => (
              <div
                style={{
                  backgroundColor: "#01579b",
                  borderTopRightRadius: "0.5rem",
                  borderTopLeftRadius: "0.5rem",
                  color: "#fff",
                }}
              >
                <MTableToolbar
                  style={{
                    // textColor: "#000",
                    textColor: "#fff",
                  }}
                  {...props}
                />
              </div>
            ),
          }}
          icons={tableIcons}
          title="Users List"
          columns={state.columns}
          data={state.data}
          options={{
            actionsColumnIndex: -1,
            grouping: true,
            paging: true,
            pageSize: 50, // make initial page size
            emptyRowsWhenPaging: false, //to make page size fix in case of less data rows
            pageSizeOptions: [25, 50, 75, 100, 150], // rows selection options
            headerStyle: {
              color: "#fff",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              backgroundColor: "#01579b",
              maxHeight: "0.5rem !important",
            },
            rowStyle: {
              color: "#000",
            },
          }}
           actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              position: 'row',
              onClick: (event, rowData) => alert('You saved ' + rowData)
            },
            {
              icon: 'delete',
              tooltip: 'Delete User',
              position: 'row',
              onClick: (event, rowData) =>
                alert('You want to delete ' + rowData.name)
            }
          ]}
        />
      </div>
    </Paper>
  );
};
export default SubDivisionList;
