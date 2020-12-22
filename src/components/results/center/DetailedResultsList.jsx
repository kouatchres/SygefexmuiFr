import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Paper } from "@material-ui/core";
import tableIcons from "../../utils/icons/tableIcons";

import { useApolloClient } from "@apollo/react-hooks";
import { centerExamSessionForResultsQuery } from "../../queries&Mutations&Functions/Queries";

const DetailedResults = ({ id }) => {
  const client = useApolloClient();
  const [state, setState] = useState({
    columns: [
      { field: "candRegistrationNumber", title: "No Inscrit" },
      { field: "specialtyCode", title: "Code Serie" },
      { field: "aptitude", title: "Aptitude" },
      { field: "EPF1", title: "EPF1" },
      { field: "EPF2", title: "EPF2" },
      { field: "cand1stName", title: "Nom" },
      { field: "cand2ndName", title: "Prenom" },
      { field: "cand3rdName", title: "Autre Noms" },
      { field: "gender", title: "Gender" },
      { field: "registrationId", title: "Resultats" },
    ],
    data: [],
  });

  const loadCandScoreData = async () => {
    const { error, data } = await client.query({
      query: centerExamSessionForResultsQuery,
      variables: { id },
    });
    console.log(data);
    const { centerExamSession } = { ...data };
    const { registration } = { ...centerExamSession };
    const getCand =
      registration &&
      registration.map((item) => ({
        candRegistrationNumber: item.candRegistrationNumber,
        specialty: item.specialty.specialtyName,
        specialtyCode: item.specialty.specialtyCode,
        aptitude: item.aptitude,
        EPF1: item.EPF1,
        EPF2: item.EPF2,
        registrationId: item.id,
        ...item.candidate,
      }));
    console.log({ registration });
    console.log(getCand);
    setState((prev) => ({ ...prev, data: getCand }));
  };

  useEffect(() => {
    loadCandScoreData();
    // loadTitleData();
  }, []);
  console.dir(state.data);
  return (
    <Paper style={{ marginTop: "2rem" }}>
      <MaterialTable
        components={{
          Toolbar: (props) => (
            <div
              style={{
                backgroundColor: "#01579b",
                borderTopRightRadius: "0.5rem",
                borderTopLeftRadius: "0.5rem",
                color: "#fff",
                   MuiSvgIcon: {
      root: {
        width: "2rem",
        fontSize: "1rem",
      },
    },
              }}
            >
              <MTableToolbar
                style={{
                  // textColor: "#fff",
                }}
                {...props}
              />
            </div>
          ),
        }}
        icons={tableIcons}
        title="Resultats des Candidats>>>>>>>>>>>>>??????????                "
        columns={state.columns}
        data={state.data}
        options={{
          paging: true,
          pageSize: 100, // make initial page size
          emptyRowsWhenPaging: false, //to make page size fix in case of less data rows
          pageSizeOptions: [60, 120, 200, 400], // rows selection options
          headerStyle: {
            color: "#fff",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            backgroundColor: "#01579b",
            maxHeight: "0.5rem !important",
          },
          rowStyle: {
            // color: "#000",
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
                  return { ...prevState, data };
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
                    return { ...prevState, data };
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
                  return { ...prevState, data };
                });
              }, 400);
            }),
        }}
      />
    </Paper>
  );
};
export default DetailedResults;
