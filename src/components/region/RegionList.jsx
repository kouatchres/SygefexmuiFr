import React, { forwardRef, useEffect, useState } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import { Paper } from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient } from "@apollo/react-hooks";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const useStyles = makeStyles({
  stickyActionsColumn: {
    "& table:first-child": {
      "& tr": {
        "& td:first-child, th:first-child": {
          backgroundColor: "#f5f5f5",
          position: "sticky",
          left: 0,
          zIndex: 10,
        },
        "& th:first-child": {
          zIndex: 10,
        },
      },
    },
  },
  stickyHeader: {
    "& table:first-child": {
      "& tr": {
        "& th": {
          backgroundColor: "#5aa193",
          position: "sticky",
          top: "4rem",
          zIndex: 10,
        },
        "& th": {
          zIndex: 10,
        },
      },
    },
  },
});

const RegionList = () => {
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
      },
      { field: "id", title: "ID" },
    ],
    data: [],
  });

  const [regions, setRegions] = useState([]);

  const loadRegionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsQuery,
    });
    {
      error && <Error error={error} />;
    }
    const { regions } = { ...data };
    console.log(regions);
    setRegions(regions);
    console.log(regions);
    setState((prev) => ({ ...prev, data: regions }));
  };

  useEffect(() => {
    loadRegionData();
  }, []);
  console.dir(state.data);
  return (
    <Paper style={{ marginTop: "2rem" }}>
      <div className={classes.stickyHeader}>
        <MaterialTable
          icons={tableIcons}
          title="Users List"
          columns={state.columns}
          data={state.data}
          options={{
            paging: true,
            pageSize: 10, // make initial page size
            emptyRowsWhenPaging: false, //to make page size fix in case of less data rows
            pageSizeOptions: [5, 10, 20], // rows selection options
          }}
          // editable={{
          //   onRowAdd: (newData) =>
          //     new Promise((resolve) => {
          //       setTimeout(() => {
          //         resolve();
          //         setState((prevState) => {
          //           const data = [...prevState.data];
          //           data.push(newData);
          //           return {
          //             ...prevState,
          //             data,
          //           };
          //         });
          //       }, 400);
          //     }),
          //   onRowUpdate: (newData, oldData) =>
          //     new Promise((resolve) => {
          //       setTimeout(() => {
          //         resolve();
          //         if (oldData) {
          //           setState((prevState) => {
          //             const data = [...prevState.data];
          //             data[data.indexOf(oldData)] = newData;
          //             return {
          //               ...prevState,
          //               data,
          //             };
          //           });
          //         }
          //       }, 400);
          //     }),
          //   onRowDelete: (oldData) =>
          //     new Promise((resolve) => {
          //       setTimeout(() => {
          //         resolve();
          //         setState((prevState) => {
          //           const data = [...prevState.data];
          //           data.splice(data.indexOf(oldData), 1);
          //           return {
          //             ...prevState,
          //             data,
          //           };
          //         });
          //       }, 400);
          //     }),
          // }}
        />
      </div>
    </Paper>
  );
};
export default RegionList;
