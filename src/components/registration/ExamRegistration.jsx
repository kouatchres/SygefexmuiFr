import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
import { useRouter } from "next/router";
import { createRegistrationMutation } from "../queries&Mutations&Functions/Mutations";
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
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";
import {
  removeTypename,
  getSpecialtyID,
  getSelectedObject,
  candExamSessionCode,
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
    // backgroundColor: "#c89666",
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

const ExamRegistration = () => {
  const classes = useStyles();
  const router = useRouter();
  const client = useApolloClient();

  const initialValues = {
    centerNumber: "",
    // examID: "",
    // sessionID: ",
  };

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [state, setState, handleSelectChange, handleInputChange] = useForm({
    centerNumber: "",
    candCode: "",
    examID: "",
    sessionID: "",
    exams: [],
    sessions: [],
    specialties: [],
    centerNumber: "",
    centerByNumber: "",
    examSessions: "",
    centerExamSessions: "",
    centerExamSessionSpecialty: {},
    loading:"false"
  });
  const {
    centerNumber,
    examID,
    sessionID,
    exams,
    sessions,
    specialties,
    centerByNumber,
    examSessions,
    centerExamSessions,
    centerExamSessionSpecialty,
    loading,
  } = state;

  const makeCenterVariableObject = (centerCodeValue) => {
    const storedCenter = {
      centerNumber: `${centerCodeValue}`,
    };
    return storedCenter;
  };

  const makeCandVariableObject = (candCodeValue) => {
    const storedCandidate = {
      candCode: `${candCodeValue}`,
    };
    return storedCandidate;
  };

  const candRegistrationNumber = (centerCode, exam, session) => {
    return `${centerCode + exam + session}`;
  };

  const loadExamData = async () => {
    
    const { error, data } = await client.query({
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
    const { error, data } = await client.query({
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
    
    setState((prev) => ({
      ...prev,
      loading: true,
    }));
    loadExamData();
    loadSessionData();
     setState((prev) => ({
      ...prev,
      loading: false,
    }));
  }, []);

  console.dir(getSessionName);

  const loadExamSessionData = async () => {
    console.dir("running the exam session query");
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
    
    setState((prev) => ({
      ...prev,
      examSessions: "",
    }));
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
    setState((prev) => ({
      ...prev,
      centerByNumber: "",
    }));

    loadCenterData();
  }, [centerNumber]);

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

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      centerExamSessions: "",
       }));
    loadCESData();
  }, [centerNumber, examSessions]);

  // transform the array into a single object
  const getCESID = centerExamSessions && centerExamSessions[0];
  console.log(getCESID);

  const loadCESS = async () => {
    const { error, data } = await client.query({
      query: getAllSpecialtiesOfACenterExamSessionQuery,
      variables: getCESID,
    });

    console.log(data);
    const getCenterExamSession = data && data.centerExamSession;
    const { centerExamSessionSpecialty } = { ...getCenterExamSession };
    console.log({ centerExamSessionSpecialty });
    setState((prev) => ({
      ...prev,
      specialties: centerExamSessionSpecialty,
    }));
  };

  useEffect(() => {
    loadCESS();
  }, [getCESID, centerNumber]);

  const newSpecialty = specialties && specialties.map((item) => item);
  const refinedSpecialty = newSpecialty && removeTypename(newSpecialty);
  console.log(refinedSpecialty);
  const getSpecialtyOptions =
    refinedSpecialty &&
    refinedSpecialty.map((item) => ({
      id: item.specialty.id,
      value: item.id,
      label: item.specialty.specialtyName,
    }));
  console.log({ state });
  console.log(getSpecialtyID(specialties, centerExamSessionSpecialty));
  const [createRegistration, { loadingMut, error }] = useMutation(
    createRegistrationMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createRegistration({
          variables: {
            ...values,
            candidate: makeCandVariableObject(values.candCode),
            centerExamSession: { id: getCESID.id },
            specialty: {
              id: getSpecialtyID(specialties, centerExamSessionSpecialty).id,
            },
            aptitude: values.aptitude,
            EPF1: values.EPF1,
            EPF2: values.EPF2,
            centerExamSessionSpecialty: {
              id: centerExamSessionSpecialty,
            },
            candExamSession: candExamSessionCode(
              values.candCode,
              examID,
              sessionID
            ),
            candRegistrationNumber:
              exams &&
              sessions &&
              candRegistrationNumber(
                centerNumber,
                getExamName.examCode,
                getSessionName.sessionName
              ),
          },
        });
        res &&
          router.push({
            pathname: "/show/results/registrationReceipt",
            query: { id: res.data.createRegistration.id },
          });
        setNotify({
          isOpen: true,
          message: "Inscription Réuissie",
          type: "success",
        });
        setTimeout(() => {
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
                {(isSubmitting || loading) && <LinearProgress />}
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
                        Inscription aux Examens
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid spacing={10} container>
                    <Grid xs={12} sm={6} item className={classes.centerAll}>
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
                        value={(centerNumber && centerNumber) || ""}
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
                        name="candCode"
                        type="text"
                        component={TextField}
                        label="Code secret candidat"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loadingMut}
                        helpertext={<ErrorMessage name="candCode" />}
                      />
                      <Field
                        variant="outlined"
                        name="centerExamSessionSpecialty"
                        label="La Spécialité"
                        onChange={(event) => {
                          handleSelectChange(
                            event,
                            "centerExamSessionSpecialty"
                          );
                        }}
                        component={Select}
                        placeholder="La Spécialité"
                        disabled={isSubmitting}
                        helpertext={
                          <ErrorMessage name="centerExamSessionSpecialty" />
                        }
                        options={getSpecialtyOptions}
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item className={classes.centerAll}>
                      <Field
                        helpertext={<ErrorMessage name="aptitude" />}
                        required
                        name="aptitude"
                        component={FRadioGroup}
                        variant="outlined"
                        label="Aptitude en EPS"
                        options={[
                          { value: "A", label: "Apte" },
                          { value: "I", label: "Inapte" },
                        ]}
                        groupProps={{ row: true }}
                      />
                      <Field
                        helpertext={<ErrorMessage name="EPF1" />}
                        required
                        name="EPF1"
                        component={FRadioGroup}
                        variant="outlined"
                        label="EPF1 Théorie"
                        value={state.EPF1}
                        options={[
                          { value: "", label: "Rien" },
                          { value: "D", label: "Dessin" },
                          { value: "E", label: "Education Menagere" },
                          { value: "M", label: "Education Musicale" },
                          { value: "G", label: "Grec" },
                          { value: "L", label: "Latin" },
                        ]}
                        groupProps={{ row: true }}
                      />
                      <Field
                        helpertext={<ErrorMessage name="EPF2" />}
                        required
                        name="EPF2"
                        value={state.EPF2}
                        component={FRadioGroup}
                        variant="outlined"
                        label="EPF2 TP"
                        options={[
                          { value: "", label: "Rien" },
                          { value: "C", label: "TP Chimie" },
                          { value: "P", label: "TP Physique" },
                          { value: "I", label: "TP Info" },
                          { value: "S", label: "TP SVT" },
                        ]}
                        groupProps={{ row: true }}
                      />
                      <Notification notify={notify} setNotify={setNotify} />
                      <Button disabled={isSubmitting} onClick={submitForm}>
                        {isSubmitting && <CircularProgress />}
                        {isSubmitting || loadingMut
                          ? "Inscription en cours"
                          : "Inscrire Candidat"}
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
export default ExamRegistration;
