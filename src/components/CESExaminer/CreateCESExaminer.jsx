import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
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
    minWidth: "20rem",
    borderRadius: "0.8rem",
    borderBottom: "0.4rem solid #c89666",
    borderTop: "0.4rem solid #829079",
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
  const client = useApolloClient();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const initialValues = {
    // centerNumber: "",
    // examID: "",
    // sessionID: ",
  };
  const [state, setState, handleSelectChange, handleInputChange] = useForm({
    centerNumber: "",
    examID: "",
    phaseID: "",
    sessionID: "",
    exams: [],
    ranks: [],
    phases: [],
    sessions: [],
    phaseRanks: [],
    centerByNumber: "",
    examSessions: "",
    centerExamSessions: "",
  });
  const {
    centerExamSessions,
    centerNumber,
    examID,
    phaseID,
    sessionID,
    exams,
    phases,
    ranks,
    phaseRanks,
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

    setState((prev) => ({
      ...prev,
      examSessions: reducedES,
    }));
  };
  console.dir(state);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      examSessions: "",
    }));
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
    setState((prev) => ({
      ...prev,
      centerByNumber: "",
    }));
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
    setState((prev) => ({
      ...prev,
      centerExamSessions: "",
    }));
    loadCESData();
  }, [centerByNumber, examSessions]);

  const loadPhaseData = async () => {
    const { data } = await client.query({
      query: getAllPhasesQuery,
    });

    const getPhases = data && data.phases;
    console.log(getPhases);
    const refinedPhase = getPhases && removeTypename(getPhases);
    console.log(refinedPhase);

    setState((prev) => ({ ...prev, phases: refinedPhase }));
  };

  useEffect(() => {
    loadPhaseData();
  }, []);

  const getPhaseOptions =
    phases &&
    phases.map((item) => ({
      ...item,
      value: item.id,
      label: item.phaseName,
    }));

  const loadPhaseRankData = async () => {
    const { data } = await client.query({
      skip: !phaseID,
      query: getAllRanksOfAnExamPhaseQuery,
      variables: { id: phaseID },
    });
    console.log(data);
    const getThePhase = data && data.phase;
    const { phaseRank } = { ...getThePhase };
    const refinedPhaseRanks = phaseRank && removeTypename(phaseRank);
    setState((prev) => ({
      ...prev,
      phaseRanks: refinedPhaseRanks,
    }));
  };

  useEffect(() => {
    loadPhaseRankData();
  }, [phaseID]);

  const getPhaseRankOptions =
    phaseRanks &&
    phaseRanks.map((item) => ({
      ...item,
      value: item.id,
      label: item.rank.rankName,
    }));

  const [CreateCenterExamSessionExaminer, { loadingMut, error }] = useMutation(
    createCenterExamSessionExaminerMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await CreateCenterExamSessionExaminer({
          variables: {
            ...values,
            examiner: makeExaminerObject(values.examinerCode),
            centerExamSession: centerExamSessions,
            phaseRank: phaseRanks && { id: values.phaseRank },
          },
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Examinateur inscript avec success",
            type: "success",
          });
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
                    <Error error={error} />
                    <Grid item>
                      <Typography
                        className={classes.titleStyled}
                        color="primary"
                        gutterBottom
                        variant="h5"
                        component="h6"
                      >
                        Examinateur s'inscrit au Centre
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
                        name="phaseID"
                        label="Phase de l'examen"
                        component={Select}
                        placeholder="Phase de l'examen"
                        onChange={(event) => {
                          handleSelectChange(event, "phaseID");
                        }}
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="phaseID" />}
                        options={getPhaseOptions}
                        fullWidth
                      />

                      <Field
                        variant="outlined"
                        name="phaseRank"
                        label="Poste occupé au centre"
                        component={Select}
                        placeholder="Poste occupé au centre"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="phaseRank" />}
                        options={getPhaseRankOptions}
                        fullWidth
                      />

                      <Field
                        variant="outlined"
                        name="examinerCode"
                        label="Code examinateur"
                        component={TextField}
                        placeholder="Code examinateur"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="examinerCode" />}
                        fullWidth
                      />
                      <Notification notify={notify} setNotify={setNotify} />

                      <Button disabled={isSubmitting} onClick={submitForm}>
                        {isSubmitting && <CircularProgress />}
                        {isSubmitting || loadingMut
                          ? "Inscription en cours"
                          : "S'inscrire au centre"}
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
