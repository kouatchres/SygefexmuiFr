import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
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
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks";
import { createAttendanceMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllEducationTypesQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSubjectSpecialtiesOfASpecialtyQuery,
  getRegisteredCandidatesPerSpecialty,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";
import {
  getObjectFromID,
  removeTypename,
  getSelectedObject,
} from "../queries&Mutations&Functions/Functions";
import useForm from "../utils/useForm";
import Notification from "../utils/Notification";

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
    marginTop: "2rem",
    padding: "1rem",
    maxWidth: "60%",
    minWidth: "50%",
    // minWidth: "60%",
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
    // minWidth: "40%",
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
  const client = useApolloClient();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const initialValues = {
    centerNumber: "",
    // examID: "",
    // sessionID: ",
  };
  const [state, setState, handleSelectChange, handleInputChange] = useForm({
    centerNumber: "",
    candCode: "",
    examID: "",
    edcuTypeID: "",
    sessionID: "",
    exams: [],
    sessions: [],
    educTypes: [],
    specialties: [],
    centerNumber: "",
    centerByNumber: "",
    examSessions: "",
    centerExamSessions: "",
    centerExamSessionSpecialty: {},
  });
  const {
    centerNumber,
    examID,
    sessionID,
    exams,
    sessions,
    educTypes,
    centerByNumber,
    examSessions,
    centerExamSessions,
  } = state;

  const loadEducTypeData = async () => {
    const { data } = await client.query({
      query: getAllEducationTypesQuery,
    });

    const getEducationTypes = data && data.educationTypes;
    const refinedEducTypes =
      getEducationTypes && removeTypename(getEducationTypes);
    setState((prev) => ({ ...prev, educTypes: refinedEducTypes }));
  };

  const getEducTypesOptions =
    educTypes &&
    educTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

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
    loadEducTypeData();
    loadSessionData();
  }, []);

  console.dir(getSessionName);

  const loadExamSessionData = async () => {
    console.dir("running the exam session query");
    const { data } = await client.query({
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

  const loadCESData = async () => {
    const { data } = await client.query({
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

  const getCESSSubjIDs =
    state.centerExamSessionSpecialtyID &&
    state.centerExamSessionSpecialtyID.split("/");
  console.dir({ getCESSSubjIDs });
  const { data: dataRegistration } = useQuery(
    getRegisteredCandidatesPerSpecialty,
    {
      skip: getCESSSubjIDs && !getCESSSubjIDs[0],
      variables: { id: getCESSSubjIDs && getCESSSubjIDs[0] },
    }
  );

  const { data: dataSubjSpecialty } = useQuery(
    getAllSubjectSpecialtiesOfASpecialtyQuery,
    {
      skip: getCESSSubjIDs && !getCESSSubjIDs[1],
      variables: { id: getCESSSubjIDs && getCESSSubjIDs[1] },
    }
  );

  const getSubjSpecialty = dataSubjSpecialty && dataSubjSpecialty.specialty;
  const { subjectSpecialty } = { ...getSubjSpecialty };

  const refinedSubjectSpecialty =
    subjectSpecialty && removeTypename(subjectSpecialty);

  const [createAttendance, { loadingMut, error }] = useMutation(
    createAttendanceMutation
  );

  // const newSpecialty = specialties && specialties.map((item) => item);
  // const refinedSpecialty = newSpecialty && removeTypename(newSpecialty);
  // console.log(refinedSpecialty);
  // const getSpecialtyOptions =
  //   refinedSpecialty &&
  //   refinedSpecialty.map((item) => ({
  //     id: item.specialty.id,
  //     value: item.id,
  //     label: item.specialty.specialtyName,
  //   }));
  // console.log({ state });
  // console.log(getSpecialtyID(specialties, centerExamSessionSpecialty));
  // const [createAttendance, { loadingMut, error }] = useMutation(
  //   createAttendanceMutation
  // );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createAttendance({
          variables: {
            ...values,
            candExamSecretCode: values.candExamSecretCode.value,
            centerExamSessionSpecialty:
              getCESSSubjIDs && getObjectFromID(getCESSSubjIDs[0]),
            subjectSpecialty:
              refinedSubjectSpecialty &&
              getObjectFromID(values.subjectSpecialty.value),
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
                        Présence candidats à l'Ecrit
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
                        onChange={(event) => {
                          handleSelectChange(event, "educTypeID");
                        }}
                        name="educTypeID"
                        label="Type d'enseignement"
                        component={Select}
                        placeholder="Type d'enseignement"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="educTypeID" />}
                        options={getEducTypesOptions}
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
                        options={getExamsOptions}
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item className={classes.centerAll}>
                      <Field
                        name="candExamSecretCode"
                        type="text"
                        component={Select}
                        label="Candidat"
                        fullWidth
                        variant="outlined"
                        options={getExamsOptions}
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
export default ExamRegistration;
