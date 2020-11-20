import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Paper } from "@material-ui/core";
import { useApolloClient } from "@apollo/react-hooks";
import { getAllRegionsDivisionsTownsCentersQuery } from "../queries&Mutations&Functions/Queries";
import tableIcons from "../utils/icons/tableIcons";

const TownList = () => {
  const client = useApolloClient();
  const [state, setState] = useState({
    columns: [
      {
        field: "regName",
        title: "Nom Region",
      },
      {
        field: "regCode",
        title: "Code Region",
        grouping: false,
      },
      { field: "divName", title: "Nom Dept" },
      { field: "divCode", title: "Code Dept", grouping: false },
      { field: "townName", title: "Nom Ville" },
      { field: "townCode", title: "Code Ville", grouping: false },
      { field: "centerName", title: "Nom Centre" },
      { field: "centerCode", title: "Code Centre", grouping: false },
    ],
    data: [],
  });

  const loadDivisionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsDivisionsTownsCentersQuery,
    });
    const { regions } = { ...data };

    const getTowns = regions.map((item) => {
      const divInfos = item.division.map((division) => {
        const subDivInfos = division.subDivision.map((subDivision) => {
          const townInfos = subDivision.town.map((ville) => {
            const centerInfos = town.center.map((centre) => ({
              regName: item.regName,
              regCode: item.regCode,
              divName: division.divName,
              divCode: division.divCode,
              townName: subDivision.townName,
              townCode: subDivision.townCode,
              ...centre,
            }));
            return centerInfos;
          });
          return townInfos;
        });
        return subDivInfos;
      });
      return divInfos;
    });

    setState((prev) => ({ ...prev, data: getTowns.flat(4) }));
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
export default TownList;
