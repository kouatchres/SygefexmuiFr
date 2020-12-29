import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Notification from "../utils/Notification";

import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getSingleCenterQuery,
  getAllEducationTypesQuery,
  getAllSpecialtiesOfAnEducationTypeQuery,
} from "../queries&Mutations&Functions/Queries";
import { createCenterExamSessionSpecialtyMutation } from "../queries&Mutations&Functions/Mutations";

import {
  removeTypename,
  getSpecialtyID,
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
    maxWidth: "40%",
    minWidth: "15rem",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    // maxWidth: "40%",
  },
});

const validationSchema = Yup.object().shape({
  // centerNumber: Yup.string().required("Numéro de centre Obligatoire"),
  // examID: Yup.string().required("Choissir l'examen"),
  // sessionID: Yup.string().required("Choissir la session"),
  specialty: Yup.string().required("serie Obligatoire"),
});

const CESRegistration = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const initialValues = {
    specialty: "",
    centerNumber: "",
  };
  const [state, setState, handleSelectChange, handleInputChange] = useForm({
    centerNumber: "",
    examID: "",
    sessionID: "",
    educTypeID: "",
    educTypes: [],
    exams: [],
    sessions: [],
    centerByNumber: "",
    examSessions: "",
    centerExamSessions: [],
    specialties: [],
  });
  const {
    centerNumber,
    examID,
    sessionID,
    educTypeID,
    educTypes,
    exams,
    examSessions,
    sessions,
    specialties,
    centerExamSessions,
    centerByNumber,
  } = state;

  const loadExamData = async () => {
    const { error, data } = await client.query({
      query: getAllExamsQuery,
    });

    const getExams = data && data.exams;
    console.log(getExams);
    const refinedExams = getExams && removeTypename(getExams);
    setState((prev) => ({ ...prev, exams: refinedExams }));
  };
  const removeExamName =
    exams && exams.map(({ examName, ...others }) => others);

  const getExamName = exams && {
    ...getSelectedObject(removeExamName, examID),
  };
  const getExamsOptions =
    exams && exams.map((item) => ({ value: item.id, label: item.examName }));

  const loadSessionData = async () => {
    const { error, data } = await client.query({
      query: getAllSessionsQuery,
    });

    const getSessions = data && data.sessions;
    const refinedSessions = getSessions && removeTypename(getSessions);
    setState((prev) => ({ ...prev, sessions: refinedSessions }));
  };
  console.dir(state);

  const getSessionName = sessions && {
    ...getSelectedObject(sessions, sessionID),
  };

  const getSessionsOptions =
    sessions &&
    sessions.map((item) => ({ value: item.id, label: item.sessionName }));

  console.dir(getSessionName);

  const loadEducTypeData = async () => {
    const { error, data } = await client.query({
      query: getAllEducationTypesQuery,
    });

    console.log(data);
    const getEducationTypes = data && data.educationTypes;
    setState((prev) => ({ ...prev, educTypes: getEducationTypes }));
  };

  const getEducTypeOptions =
    educTypes &&
    educTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  useEffect(() => {
    loadExamData();
    loadEducTypeData();
    loadSessionData();
  }, []);

  const loadExamSessionData = async () => {
    console.dir("running the exam session query");
    setState((state) => ({ ...state, examSessions: "" }));

    const { error, data } = await client.query({
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
    setState((prev) => ({ ...prev, examSessions: "" }));
    loadExamSessionData();
  }, [examID, sessionID]);

  const loadCenterData = async () => {
    const { error, data } = await client.query({
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
    setState((state) => ({ ...state, centerByNumber: "" }));
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
      centerExamSessions: refinedCenterExamSessions,
    }));
  };
  const getCES = centerExamSessions && centerExamSessions[0];
  console.log(getCES);

  useEffect(() => {
    setState((state) => ({ ...state, centerExamSessions: "" }));
    loadCESData();
  }, [centerNumber, examSessions]);

  const loadSpecialtyData = async () => {
    console.log("running the specialty Selection");
    const { error, data } = await client.query({
      query: getAllSpecialtiesOfAnEducationTypeQuery,
      variables: {
        id: educTypeID && educTypeID,
      },
    });

    const getEducType = data && data.educationType;
    const { specialty } = getEducType;
    const refinedSpecialty = removeTypename(specialty);

    setState((prev) => ({ ...prev, specialties: refinedSpecialty }));
  };

  const getSpecialtyOptions =
    specialties &&
    specialties.map((item) => ({
      value: item.id,
      label: item.specialtyName,
    }));

  useEffect(() => {
    loadSpecialtyData();
  }, [educTypeID]);

  const reducedSpecialty =
    specialties && specialties.map(({ specialtyName, ...others }) => others);

  const [createCenterExamSessionSpecialty, { loadingMut, error }] = useMutation(
    createCenterExamSessionSpecialtyMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        const res = await createCenterExamSessionSpecialty({
          variables: {
            ...values,
            specialty:
              specialties &&
              getSelectedObject(reducedSpecialty, values.specialty),
            centerExamSession: getCES && getCES,
          },
        });

        setTimeout(() => {
          setNotify({
            isOpen: true,
            message: "Serie confirmée au centre ",
            type: "success",
          });
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ submitForm, setFieldValue, isSubmitting }) => {
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
                        Series offertes par centre
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
                        label="Numéro de centre"
                        fullWidth
                        value={(centerNumber && centerNumber) || 0}
                        onChange={handleInputChange}
                        variant="outlined"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="centerNumber" />}
                      />
                      <Field
                        variant="outlined"
                        name="educTypeID"
                        label="Type d'enseignement"
                        component={Select}
                        placeholder="Type d'ensignement"
                        onChange={(event) => {
                          handleSelectChange(event, "educTypeID");
                        }}
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="educTypeID" />}
                        options={getEducTypeOptions}
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
                      <Field
                        variant="outlined"
                        name="examID"
                        label="L'Examen"
                        component={Select}
                        placeholder="l'Examen"
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
                        name="specialty"
                        label="Serie"
                        component={Select}
                        placeholder="Serie"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="specialty" />}
                        options={getSpecialtyOptions}
                        fullWidth
                      />
                      <Notification notify={notify} setNotify={setNotify} />

                      <Button disabled={isSubmitting} onClick={submitForm}>
                        {isSubmitting && <CircularProgress />}
                        {isSubmitting || loadingMut
                          ? "Inscription en cours"
                          : "Serie au centre"}
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
export default CESRegistration;
