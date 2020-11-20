import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Paper } from "@material-ui/core";
import { useApolloClient } from "@apollo/react-hooks";
import { getAllRegionsAndDivisionsQuery } from "../queries&Mutations&Functions/Queries";
import tableIcons from "../utils/icons/tableIcons";

const DivisionList = () => {
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
    ],
    data: [],
  });

  const loadDivisionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsAndDivisionsQuery,
    });
    const { regions } = { ...data };

    const getDivisions = regions.map((item) => {
      const divInfos = item.division.map((division) => ({
        regName: item.regName,
        regCode: item.regCode,
        ...division,
      }));
      return divInfos;
    });

    setState((prev) => ({ ...prev, data: getDivisions.flat(1) }));
  };

  useEffect(() => {
    loadDivisionData();

    console.log(state.data);
  }, []);

  console.dir(state.data);
  return (
    <Paper style={{ marginTop: "2rem" }}>
      <div>
        <MaterialTable
          stickyHeader
          style={{ position: "sticky", top: 0 }}
          components={{
            Toolbar: (props) => (
              <div
                style={{
                  backgroundColor: "#a2463c",
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
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return {
                      ...prevState,
                      data,
                    };
                  });
                }, 400);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return {
                        ...prevState,
                        data,
                      };
                    });
                  }
                }, 400);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return {
                      ...prevState,
                      data,
                    };
                  });
                }, 400);
              }),
          }}
        />
      </div>
    </Paper>
  );
};
export default DivisionList;
