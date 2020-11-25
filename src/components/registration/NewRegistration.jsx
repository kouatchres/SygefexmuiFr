import React, { useEffect } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import Router from "next/router";

import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { ErrorMessage, Formik, Form, Field } from "formik";
import useForm from "../utils/useForm";
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import {
  getSelectedObject,
  removeTypename,
  uniqueCodeGen,
  candExamSessionCode,
} from "../queries&Mutations&Functions/Functions";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllEducationTypesQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";
import { createRegistrationMutation } from "../queries&Mutations&Functions/Mutations";

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
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
    padding: "1rem",
    maxWidth: "50vw",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  allControls: {
    display: "grid",
    placeItems: "center",
  },
  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "30vw",
  },
});

const validationSchema = Yup.object().shape({
  // centerNumber: Yup.string().required(
  //   "Code anonymat du candidat Obligatoire"),
  educTypeID: Yup.string().required("Choix de la matière Obligatoire"),
  subjectAve: Yup.number()
    .required("Note du candidat Obligatoire")
    .min(0, "Pas de note négative")
    .max(20, "Pas de note supérieure a 20"),
});

const NewDivision = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [state, setState, handleSelectChange, handleInputChange] = useForm({
    centerExamSessionSpecialtyID: "",
    centerNumber: "",
    centerByNumber: {},
    examID: "",
    sessionID: "",
    examSession: {},
    centerExamSession: {},
    educTypeID: "",
    educTypes: [],
    sessions: [],
    exams: [],
  });

  const initialValues = {
    centerNumber: "",
    EPF1: "",
    EPF2: "",
  };
  const {
    sessionID,
    educTypeID,
    examID,
    educTypes,
    exams,
    sessions,
    centerNumber,
    centerByNumber,
    examSession,
    centerExamSession,
  } = state;

  const loadEducTypeData = async () => {
    const { error, data, loading } = await client.query({
      query: getAllEducationTypesQuery,
    });

    setState((prev) => ({ ...prev, educTypes: data.educationTypes }));
  };

  const getEducTypeOptions =
    educTypes &&
    educTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  const loadSessionData = async () => {
    const { error, data, loading } = await client.query({
      query: getAllSessionsQuery,
    });

    setState((prev) => ({ ...prev, sessions: data.sessions }));
  };
  const refinedSessions = sessions && removeTypename(sessions);

  const getSessionName = refinedSessions && {
    ...getSelectedObject(refinedSessions, sessionID),
  };

  const getSessionsOptions =
    sessions &&
    sessions.map((item) => ({
      value: item.id,
      label: item.sessionName,
    }));

  const loadExamData = async () => {
    const { error, data, loading } = await client.query({
      query: getAllExamsQuery,
    });

    setState((prev) => ({ ...prev, exams: data.exams }));
  };
  const removeExamName =
    exams && exams.map(({ examName, ...others }) => others);
  const refinedExams = exams && removeTypename(removeExamName);

  const getExamName = refinedExams && {
    ...getSelectedObject(refinedExams, examID),
  };
  const getExamsOptions =
    exams && exams.map((item) => ({ value: item.id, label: item.examName }));
  console.log(state);

  useEffect(() => {
    loadEducTypeData();
    loadSessionData();
    loadExamData();
  }, []);

  console.log({ getExamName });

  const loadCenterData = async () => {
    const { error, data } = await client.query({
      // skip: !centerNumber,
      query: getSingleCenterQuery,
      variables: { centerNumber },
    });

    const { centerByNumber } = { ...data };
    const newCenterByNumber = removeTypename(centerByNumber);
    console.log(newCenterByNumber);
    setState((prev) => ({ ...prev, centerByNumber: newCenterByNumber }));
  };

  useEffect(() => {
    loadCenterData();
  }, [centerNumber]);
  console.log(centerByNumber);

  const loadExamSessionData = async () => {
    console.log("running exam session query");
    const { error, data: dataExamSessions } = await client.query({
      // skip: !getExamName || !getSessionName,
      query: getExamSessionQuery,
      variables: {
        exam: getExamName,
        session: getSessionName,
      },
    });

    const getExamSessions = dataExamSessions && dataExamSessions.examSessions;
    const refinedES = getExamSessions && removeTypename(getExamSessions);
    const reducedES = refinedES && refinedES[0];
    console.log(reducedES);

    setState((prev) => ({ ...prev, examSession: reducedES }));
  };

  useEffect(() => {
    loadExamSessionData();
  }, [examID || sessionID]);
  console.log(examSession);

  const loadCenterExamSessionData = async () => {
    console.log("running center exam session query");

    const { error, data: dataCES } = await client.query({
      // skip: !examSession || !centerByNumber,
      query: getSingleCenterExamSessionQuery,
      variables: {
        examSession: examSession && examSession,
        center: centerByNumber && centerByNumber,
      },
    });
    const getCenterExamSessionsByCode =
      dataCES && dataCES.centerExamSessionsByCode;
    console.log(getCenterExamSessionsByCode);
    const refinedCenterExamSessions =
      getCenterExamSessionsByCode &&
      removeTypename(getCenterExamSessionsByCode);
    // transform the array into a single object
    const getCESID = refinedCenterExamSessions && refinedCenterExamSessions[0];
    console.log(getCESID);

    setState((prev) => ({ ...prev, centerExamSession: getCESID }));
  };

  useEffect(() => {
    loadCenterExamSessionData();
  }, [examID || sessionID || centerNumber]);
  console.log(centerExamSession);

  // const {
  //   data: dataSpecialtyCES,
  //   loading: loadingSpecialtyCES,
  //   error: errSpecialtyCES,
  // } = useQuery(getAllSpecialtiesOfACenterExamSessionQuery, {
  //   variables: getCESID,
  // });

  // console.log(dataSpecialtyCES);
  // const getCenterExamSession =
  //   dataSpecialtyCES && dataSpecialtyCES.centerExamSession;
  // const { centerExamSessionSpecialty } = { ...getCenterExamSession };
  // console.log({ centerExamSessionSpecialty });

  // const newSpecialty =
  //   centerExamSessionSpecialty &&
  //   centerExamSessionSpecialty.map((item) => item);
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
  // console.log({ getCESID });
  // console.log(state.centerExamSessionSpecialtyID);

  const [createRegistration, { loading, error }] = useMutation(
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
            candExamSecretCode: uniqueCodeGen(20),
            candidate: makeCandVariableObject(values.candCode),
            centerExamSession: { id: getCESID.id },
            specialty: { id: values.centerExamSessionSpecialty.id },
            aptitude: values.aptitude,
            EPF1: values.EPF1,
            EPF2: values.EPF2,
            centerExamSessionSpecialty: {
              id: values.centerExamSessionSpecialty.value,
            },
            candExamSession: candExamSessionCode(
              values.candCode,
              examID,
              sessionID
            ),
            candRegistrationNumber:
              refinedExams &&
              refinedSessions &&
              candRegistrationNumber(
                centerNumber,
                getExamName.examCode,
                getSessionName.sessionName
              ),
          },
        });
        res &&
          Router.push({
            pathname: "/show/results/registrationReceipt",
            query: { id: res.data.createRegistration.id },
          });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ submitForm, isSubmitting }) => {
        return (
          <div className={classes.centerAll}>
            <Paper className={classes.pageStyled} elevation={5}>
              <Form aria-busy={isSubmitting}>
                {(isSubmitting || loading) && <LinearProgress />}
                <Grid className={classes.centerAll} container>
                  <Grid container className={classes.centerAll}>
                    <Grid item>
                      <Error error={error} />
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
                  <Grid container spacing={10}>
                    <Grid item xs={12} sm={6} className={classes.allControls}>
                      <Field
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        name="centerName"
                        type="text"
                        value={
                          (centerByNumber && centerByNumber.centerCode) || ""
                        }
                        label="Libellé du centre"
                        disabled={isSubmitting}
                        helperText={<ErrorMessage name="centerName" />}
                      />
                      <Field
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        name="centerNumber"
                        type="number"
                        value={(centerNumber && centerNumber) || 0}
                        onChange={handleInputChange}
                        label="Numéro du centre"
                        disabled={isSubmitting}
                        helperText={<ErrorMessage name="centerNumber" />}
                      />
                      <Field
                        component={Select}
                        variant="outlined"
                        name="sessionID"
                        placeholder="Session"
                        onChange={(event) => {
                          handleSelectChange(event, "sessionID");
                        }}
                        label="Session"
                        options={getSessionsOptions}
                        disabled={isSubmitting}
                        helperText={<ErrorMessage name="sessionID" />}
                      />

                      <Field
                        component={Select}
                        variant="outlined"
                        name="examID"
                        placeholder="Examen"
                        label="Examen"
                        options={getExamsOptions}
                        disabled={isSubmitting}
                        onChange={(event) => {
                          handleSelectChange(event, "examID");
                        }}
                        helperText={<ErrorMessage name="examID" />}
                      />

                      <Field
                        component={Select}
                        variant="outlined"
                        name="educTypeID"
                        placeholder="Type d'enseignement"
                        label="Type d'enseignement"
                        onChange={(event) => {
                          handleSelectChange(event, "educTypeID");
                        }}
                        options={getEducTypeOptions}
                        disabled={isSubmitting}
                        helperText={<ErrorMessage name="educTypeID" />}
                      />
                      <Field
                        component={Select}
                        variant="outlined"
                        name="centerExamSessionSpecialty"
                        placeholder="La Spécialité"
                        label="La Spécialité"
                        options={getSessionsOptions}
                        disabled={isSubmitting}
                        helperText={
                          <ErrorMessage name="centerExamSessionSpecialty" />
                        }
                      />
                      <Field
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        name="candCode"
                        type="text"
                        label="Code secret"
                        disabled={isSubmitting}
                        helperText={<ErrorMessage name="candCode" />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.allControls}>
                      <Field
                        required
                        name="aptitude"
                        component={FRadioGroup}
                        label="Aptitude en EPS"
                        options={[
                          { value: "A", label: "Apte" },
                          { value: "I", label: "Inapte" },
                        ]}
                        groupProps={{ row: true }}
                      />
                      <Field
                        required
                        name="EPF1"
                        component={FRadioGroup}
                        label="EPF1 Theorie"
                        options={[
                          { value: "D", label: "Dessin" },
                          { value: "M", label: "Education Musicale" },
                          { value: "E", label: "Education Menagere" },
                          { value: "G", label: "Grec" },
                          { value: "L", label: "Latin" },
                        ]}
                        groupProps={{ row: true }}
                      />
                      <Field
                        required
                        name="EPF2"
                        component={FRadioGroup}
                        label="EPF2 Pratiques"
                        options={[
                          { value: "C", label: "TP Chimie" },
                          { value: "I", label: "TP Info" },
                          { value: "P", label: "TP Physique" },
                          { value: "S", label: "TP SVT" },
                        ]}
                        groupProps={{ row: true }}
                      />

                      <Button
                        disabled={isSubmitting || loading}
                        onClick={submitForm}
                      >
                        {(isSubmitting || loading) && <CircularProgress />}
                        {isSubmitting || loading
                          ? "Inscription en cours"
                          : "S'Inscrire"}
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
export default NewDivision;

// <SygefexMuiSelect
// name="region"
// margin="normal"
// onChange={(value) =>
//   setFieldValue("region", value.target)
// }
// placeholder="la Région"
// disabled={isSubmitting}
// >
//   {regions &&
//     regions.map((item) => (
//       <MenuItem key={item.id} value={item.id}>
//         {item.regName}
//       </MenuItem>
//     ))}
// </Field>
