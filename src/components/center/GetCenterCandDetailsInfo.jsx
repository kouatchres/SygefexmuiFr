import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import {useRouter} from "next/router"
import * as Yup from "yup";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { ErrorMessage, Formik, Form, Field } from "formik";
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import Notification from "../utils/Notification";

import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { createCenterExamSessionExaminerMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getSingleCenterQuery,
  getAllPhasesQuery,
  getAllRanksOfAnExamPhaseQuery,
} from "../queries&Mutations&Functions/Queries";

import {
  removeTypename,
  getSelectedObject,
} from "../queries&Mutations&Functions/Functions";
import useForm from "../utils/useForm";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",

    // fontSize: 100,
  },

  divStyled: {
    display: "grid",
    placeItems: "center",
    top: "2rem",
    height: "90vh",
  },
  pageStyled: {
    display: "grid",
    placeItems: "center",
    padding: "1rem",
    maxWidth: "80%",
   
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    // minWidth: "30vw",
    minWidth: "40%",
    // maxWidth: "100vw",
  },
});

const validationSchema = Yup.object().shape({
  // examID: Yup.string().required("Choissir l'examen"),
  // sessionID: Yup.string().required("Choissir la session"),
  // // centerName: Yup.string().required("Libellé Centre Obligatoire"),
  // centerNumber: Yup.string().required("Numéro de centre Obligatoire"),
});

const CreateCESExaminer = () => {
  const classes = useStyles();
  const router = useRouter()
  const client = useApolloClient();
const initialValues={}
  
  const [state, setState, handleSelectChange, handleInputChange] = useForm({
    centerNumber: "",
    examID: "",
    sessionID: "",
    exams: [],
    sessions: [],
    centerByNumber: "",
    examSessions: "",
    centerExamSessions: "",
  });
  const {
    centerExamSessions,
    centerNumber,
    examID,
    sessionID,
    exams,
    examSessions,
    sessions,
    centerByNumber,
  } = state;

  const makeExaminerObject = (profCodeValue) => {
    const storedProf = {
      examinerCode: `${profCodeValue}`,
    };
    return storedProf;
  };

  const loadExamData = async () => {
    const { data } = await client.query({
      query: getAllExamsQuery,
    });

    const getExams = data && data.exams;
    console.log(getExams);
    const refinedExams = getExams && removeTypename(getExams);
    setState((prev) => ({
      ...prev,
      exams: refinedExams,
    }));
  };
  const removeExamName =
    exams && exams.map(({ examName, ...others }) => others);

  const getExamName = exams && {
    ...getSelectedObject(removeExamName, examID),
  };
  const getExamsOptions =
    exams && exams.map((item) => ({ value: item.id, label: item.examName }));

  const loadSessionData = async () => {
    const { data } = await client.query({
      query: getAllSessionsQuery,
    });

    const getSessions = data && data.sessions;
    const refinedSessions = getSessions && removeTypename(getSessions);
    setState((prev) => ({
      ...prev,
      sessions: refinedSessions,
    }));
  };
  console.dir(state);

  const getSessionName = sessions && {
    ...getSelectedObject(sessions, sessionID),
  };

  const getSessionsOptions =
    sessions &&
    sessions.map((item) => ({ value: item.id, label: item.sessionName }));

  useEffect(() => {
    loadExamData();
    loadSessionData();
  }, []);

  console.dir(getSessionName);

  const loadExamSessionData = async () => {
    console.dir("running exam session query");
    const { data, loading } = await client.query({
      skip: !examID || !sessionID,
      query: getExamSessionQuery,
      variables: {
        exam: examID && getExamName,
        session: sessionID && getSessionName,
      },
    });

    console.log(data);
    const getExamSessions = data && data.examSessions;
    const refinedES = getExamSessions && removeTypename(getExamSessions);
    const reducedES = refinedES && refinedES[0];
    console.log(reducedES);
    {
      loading && <CircularProgress />;
    }
    setState((prev) => ({
      ...prev,
      examSessions: reducedES,
    }));
  };
  console.dir(state);

  useEffect(() => {
    loadExamSessionData();
  }, [examID, sessionID]);

  const loadCenterData = async () => {
    const { data } = await client.query({
      skip: !centerNumber,
      query: getSingleCenterQuery,
      variables: { centerNumber: centerNumber },
    });

    const { centerByNumber } = { ...data };
    const newCenterByNumber = removeTypename(centerByNumber);
    console.log(newCenterByNumber);
    setState((state) => ({ ...state, centerByNumber: newCenterByNumber }));
  };

  useEffect(() => {
    loadCenterData();
  }, [centerNumber]);
  console.log(centerByNumber);

  const loadCESData = async () => {
    const { error, data } = await client.query({
      query: getSingleCenterExamSessionQuery,
      variables: {
        examSession: examSessions && examSessions,
        center: centerByNumber && centerByNumber,
      },
    });

    console.log(data);
    const getCenterExamSessionsByCode = data && data.centerExamSessionsByCode;
    console.log(getCenterExamSessionsByCode);
    const refinedCenterExamSessions =
      getCenterExamSessionsByCode &&
      removeTypename(getCenterExamSessionsByCode);
    setState((prev) => ({
      ...prev,
      centerExamSessions: refinedCenterExamSessions[0],
    }));
  };

  useEffect(() => {
    loadCESData();
  }, [centerByNumber, examSessions]);


  console.log(centerExamSessions)

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
      centerExamSessions && router.push({
   pathname: '/show/results/centerResults/centerResultsForSeries',
   query: { id: centerExamSessions.id }
      });
        

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ submitForm, isSubmitting }) => {
        return (
          <div className={classes.centerAll}>
            <Paper className={classes.pageStyled} elevation={13}>
              <Form aria-busy={isSubmitting}>
                {isSubmitting && <LinearProgress />}
                <Grid className={classes.centerAll} container>
                  <Grid container className={classes.centerAll}>
                    <Grid item>
                      <Typography
                        className={classes.titleStyled}
                        color="primary"
                        gutterBottom
                        variant="h5"
                        component="h6"
                      >
Candidats inscrits a l'examen
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid spacing={10} container>
                    <Grid xs={12} item className={classes.centerAll}>
                      <Field
                        name="centerName"
                        type="text"
                        component={TextField}
                        label="Nom du centre"
                        fullWidth
                        value={
                          (centerByNumber && centerByNumber.centerCode) || ""
                        }
                        variant="outlined"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="centerName" />}
                      />
                      <Field
                        name="centerNumber"
                        type="number"
                        component={TextField}
                        label="Numéro du centre"
                        fullWidth
                        value={(centerNumber && centerNumber) || 0}
                        onChange={handleInputChange}
                        variant="outlined"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="centerNumber" />}
                      />
                      <Field
                        variant="outlined"
                        name="examID"
                        label="Examen"
                        component={Select}
                        placeholder="Examen"
                        onChange={(event) => {
                          handleSelectChange(event, "examID");
                        }}
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="examID" />}
                        options={getExamsOptions}
                        fullWidth
                      />

                      <Field
                        variant="outlined"
                        onChange={(event) => {
                          handleSelectChange(event, "sessionID");
                        }}
                        name="sessionID"
                        label="La session"
                        component={Select}
                        placeholder="la session"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="sessionID" />}
                        options={getSessionsOptions}
                        fullWidth
                      />
                      
                  
                      <Button disabled={isSubmitting} onClick={submitForm}>
                        {isSubmitting && <CircularProgress />}
                        {isSubmitting 
                          ? "Recherche en cours"
                          :"Voir Liste"}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            </Paper>
          </div>
        );
      }}
    </Formik>
  );
};
export default CreateCESExaminer;
