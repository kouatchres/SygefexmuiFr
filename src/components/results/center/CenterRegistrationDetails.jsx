import React, { useState, useEffect } from "react";
import { centerExamSessionForResultsQuery } from "../../queries&Mutations&Functions/Queries";
import tableIcons from "../../utils/icons/tableIcons";
import UpdatePopup from "../../utils/UpdatePopup";
import MaterialTable, { MTableToolbar } from "material-table";
import CandidateResultSlip from "../candidate/CandidateResultSlip";
import { Receipt as ReceiptIcon } from "@material-ui/icons";
import { Formik, Form } from "formik";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient } from "@apollo/react-hooks";

const useStyles = makeStyles({
  divStyled: {
    display: "grid",
    placeItems: "center",
    top: "2rem",
    height: "90vh",
  },
  pageStyled: {
    display: "grid",
    placeItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    minWidth: "50%",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  partTwo: {
    display: "grid",
    gridTemplateRows: "1fr 1fr ",
  },

  picStyled: {
    // paddingLeft: "1rem",
    height: "15rem",
    width: "12rem",
    display: "grid",
    placeItems: "center",
    borderRadius: "0.5rem",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "50%",
  },
});

const CenterRegistrationDetails = ({ id }) => {
  const client = useApolloClient();
  const classes = useStyles();
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: "",
  });

  const [state, setState] = useState({
    columns: [
      {
        field: "specialty.specialtyCode",
        title: "Serie",
        options: {
          width: 10,
          headerNoWrap: true,
        },
      },
      {
        field: "candidate.cand1stName",
        title: "Nom",
        options: {
          width: 50,
          headerNoWrap: true,
        },
      },
      {
        field: "candidate.cand2ndName",
        title: "Prenom",
        options: {
          width: 50,
          headerNoWrap: true,
        },
      },
      {
        field: "candidate.cand3rdName",
        title: "Autres",
        options: {
          width: 50,
          headerNoWrap: true,
        },
      },

      {
        field: "candidate.gender",
        title: "Sexe",
        options: {
          width: 10,
          headerNoWrap: true,
        },
      },

      {
        field: "candRegistrationNumber",
        title: "No Inscription",
        options: {
          width: 20,
          headerNoWrap: true,
        },
      },
    ],
    center: "",
    exam: "",
    session: "",
    registration: [],
  });

  const initialValues = {};

  const loadCenterRegistrationInfo = async () => {
    const { data } = await client.query({
      query: centerExamSessionForResultsQuery,
      variables: { id },
    });
    console.log(data);
    const getCenterExamSession = data.centerExamSession;
    const { registration, center, examSession } = getCenterExamSession;
    const { exam, session } = { ...examSession };
    console.log(center);

    setState((prev) => ({ ...prev, center, registration, exam, session }));
  };

  useEffect(() => {
    loadCenterRegistrationInfo();
  }, []);
  const { center, session, exam, registration } = state;

  const handleUpdatePopupClose = () => {
    setUpdatePopupState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const actions = [
    {
      icon: () => <ReceiptIcon />,
      tooltip: "Voir resultat detaillé",
      onClick: (event, rowData) => {
        setUpdatePopupState({ isOpen: true, id: rowData.id });
      },
    },
  ];
  console.log(state.registration);
  return (
    <Formik initialValues={initialValues}>
      {({ values, isSubmitting }) => (
        <Paper className={classes.pageStyled} elevation={13}>
          <Form aria-busy={isSubmitting}>
            <Grid className={classes.centerAll} container>
              <Grid container className={classes.centerAll}>
                <Grid item>
                  <Typography
                    className={classes.titleStyled}
                    color="primary"
                    gutterBottom
                    variant="body1"
                    component="h6"
                  >
                    Resultats Du: {exam && exam.examName}, Session:
                    {session && session.sessionName}, centre:
                    {center && center.centerName}
                  </Typography>
                </Grid>
              </Grid>
              <div>
                <MaterialTable
                  className={classes.head}
                  components={{
                    Toolbar: (props) => (
                      <div
                        style={{
                          backgroundColor: "#829079",
                          borderTopRightRadius: "0.5rem",
                          borderTopLeftRadius: "0.5rem",
                          color: "#ede6b9",
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
                  title="Resultats detaillés des Candidats.................. .................                           "
                  columns={state.columns}
                  data={state.registration}
                  options={{
                    actionsColumnIndex: -1,
                    grouping: true,
                    paging: true,
                    pageSize: 50, // make initial page size
                    emptyRowsWhenPaging: false, //to make page size fix in case of less data rows
                    pageSizeOptions: [25, 50, 75, 100, 150], // rows selection options
                    headerStyle: {
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      // backgroundColor: "#abb",
                      color: "#ede6b9",
                      backgroundColor: "#b9925e",
                      maxHeight: "0.5rem !important",
                    },
                    rowStyle: {
                      color: "#000",
                    },
                  }}
                  actions={actions}
                />

                <UpdatePopup
                  // title={updatePopupState.id}
                  isOpen={updatePopupState.isOpen}
                  onClose={handleUpdatePopupClose}
                >
                  <CandidateResultSlip id={updatePopupState.id} />
                </UpdatePopup>
              </div>
            </Grid>
          </Form>
        </Paper>
      )}
    </Formik>
  );
};

export default CenterRegistrationDetails;
