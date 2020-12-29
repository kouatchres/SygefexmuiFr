import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
import { useRouter } from "next/router";
import { createAttendanceMutation } from "../queries&Mutations&Functions/Mutations";
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
import { compareValues } from "../queries&Mutations&Functions/Functions";

import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getRegisteredCandidatesPerSpecialty,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getAllSubjectSpecialtiesOfASpecialtyQuery,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";
import {
  removeTypename,
  getSpecialtyID,
  getSelectedObject,
  getObjectFromID,
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
  handin: Yup.string().required("indiquer la remise de copie"),
  collected: Yup.string().required("Indiquer la collecte de matériels"),
  candExamSecretCode: Yup.string().required("Choisir le cadidat en question"),
});

const Attendance = () => {
  const classes = useStyles();
  const router = useRouter();
  const client = useApolloClient();

  const initialValues = {
    candExamSecretCode: "",
    handin: "",
    subjectSpecialty: "",
    collected: "",
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
    specialty: {},
    centerNumber: "",
    centerByNumber: "",
    examSessions: "",
    centerExamSessions: "",
    centerExamSessionSpecialty: {},
    candsPerSeries: [],
    subjectSpecialties: [],
    subjectSpecialty: "",
  });
  const {
    centerNumber,
    examID,
    sessionID,
    exams,
    sessions,
    specialties,
    specialty,
    centerByNumber,
    examSessions,
    centerExamSessions,
    centerExamSessionSpecialty,
    candsPerSeries,
    subjectSpecialties,
    subjectSpecialty,
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
  const getSpecialty = getSpecialtyID(specialties, centerExamSessionSpecialty);

  const loadSubjectSpecialtyData = async () => {
    const { error, data, loading } = await client.query({
      skip: !specialty,
      query: getAllSubjectSpecialtiesOfASpecialtyQuery,
      variables: {
        id: getSpecialty && getSpecialty.id,
      },
    });

    console.log(data);
    const getSubjSpecialty = data && data.specialty;
    const { subjectSpecialty } = {
      ...getSubjSpecialty,
    };

      
  const suspects= subjectSpecialty.map((item)=>({
     suspectID:item.id,
     ...item.subject,

  }))
    console.log(subjectSpecialty);
    setState((prev) => ({ ...prev, subjectSpecialties: suspects }));
  };

  useEffect(() => {
    loadSubjectSpecialtyData();
  }, [centerExamSessionSpecialty]);

 const sortedSuspects=subjectSpecialties.sort(compareValues("subjectName"))
//  const sortedSuspects=subjectSpecialties.sort(compareValues("subjectName",order: "desc"))

  const getSubjectsOptions =
    sortedSuspects &&
    sortedSuspects.map((item) => ({
      value: item.suspectID,
      label: item.subjectName,
    }));


  const loadCenterRegistrationInfo = async () => {
    console.log("running the candidate query");
    const { data } = await client.query({
      query: getRegisteredCandidatesPerSpecialty,
      variables: { id: centerExamSessionSpecialty },
    });

    console.log(data);
    const {
      registration,
      center,
      examSession,
    } = data.centerExamSessionSpecialty;
    console.log(registration);

    const regCandInfo = registration.map((item) => ({
      candCode: item.candExamSecretCode,
      candRegNo: item.candRegistrationNumber,
      ...item.candidate,
    }));

    setState((prev) => ({ ...prev, candsPerSeries: regCandInfo }));
  };

  console.log({ candsPerSeries });
  useEffect(() => {
    loadCenterRegistrationInfo();
  }, [centerExamSessionSpecialty]);

  const getCandOptions = candsPerSeries.map((item) => ({
    value: item.candCode,
    label: item.candRegNo,
  }));

  const [createAttendance, { loadingMut, error }] = useMutation(
    createAttendanceMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createAttendance({
          variables: {
            ...values,
            candExamSecretCode: values.candExamSecretCode,
            centerExamSessionSpecialty: getObjectFromID(
              centerExamSessionSpecialty
            ),
            subjectSpecialty: getObjectFromID(values.subjectSpecialty),
          },
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Présence indiquée avec success",
            type: "success",
          });
          resetForm(true);
          setSubmitting(false);
        }, 200);
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
                        Présence aux épreuves
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
                        variant="outlined"
                        name="centerExamSessionSpecialty"
                        label="Spécialité"
                        onChange={(event) => {
                          handleSelectChange(
                            event,
                            "centerExamSessionSpecialty"
                          );
                        }}
                        component={Select}
                        placeholder="Spécialité"
                        disabled={isSubmitting}
                        helpertext={
                          <ErrorMessage name="centerExamSessionSpecialty" />
                        }
                        options={getSpecialtyOptions}
                        fullWidth
                      />
                      <Field
                        variant="outlined"
                        name="subjectSpecialty"
                        label="Matières"
                        component={Select}
                        placeholder="Matières"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="subjectSpecialty" />}
                        options={getSubjectsOptions}
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item className={classes.centerAll}>
                      <Field
                        name="candExamSecretCode"
                        type="text"
                        component={Select}
                        label="Matricule candidat"
                        fullWidth
                        variant="outlined"
                        options={getCandOptions}
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="candExamSecretCode" />}
                      />
                      <Field
                        helpertext={<ErrorMessage name="collected" />}
                        required
                        name="collected"
                        component={FRadioGroup}
                        variant="outlined"
                        label="Collecte de matériels"
                        disabled={isSubmitting}
                        options={[
                          { value: "O", label: "Oui" },
                          { value: "N", label: "Non" },
                        ]}
                        groupProps={{ row: true }}
                      />
                      <Field
                        helpertext={<ErrorMessage name="handin" />}
                        required
                        name="handin"
                        component={FRadioGroup}
                        variant="outlined"
                        label="Remise de copies"
                        disabled={isSubmitting}
                        options={[
                          { value: "O", label: "Oui" },
                          { value: "N", label: "Non" },
                        ]}
                        groupProps={{ row: true }}
                      />
                      <Notification notify={notify} setNotify={setNotify} />

                      <Button disabled={isSubmitting} onClick={submitForm}>
                        {isSubmitting && <CircularProgress />}
                        {isSubmitting || loadingMut
                          ? "Validation en cours"
                          : "Valide présence"}
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
export default Attendance;
