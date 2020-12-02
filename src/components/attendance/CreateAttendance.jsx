import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Error from "../ErrorMessage.js";
import useForm from "../utils/useForm";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { ErrorMessage, Formik, Form, Field } from "formik";
import SygefexMuiSelect from "../muiComponents/controls/SygefexMuiDatePicker";
import {
  Grid,
  Typography,
  LinearProgress,
  Paper,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";

import {
  getObjectFromID,
  getSelectedObject,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import { createAttendanceMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllEducationTypesQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getAllSubjectSpecialtiesOfASpecialtyQuery,
  getRegisteredCandidatesPerSpecialty,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";

// import { FormikRadio } from "@dccs/react-formik-mui";
// import { FormLabel, RadioGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  MuiGrid: {
    root: {
      margin: theme.spacing(3),
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
  },
  typographyStyled: {
    display: "grid",
    placeItems: "center",
    alignItems: "center",
    justifyItems: "center",
  },

  pageStyled: {
    display: "grid",
    placeItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    width: "100%",
    // border: "0.2rem solid #222aa5",
  },

  itemsStyled: {
    marginTop: "2rem",
    padding: "1rem",
    minWidth: "100%",
    border: "0.2rem solid #212af5",
  },

  formGroupStyled: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
  },
  

  allControls: {
    paddingTop: "0.1rem",
    display: "grid",
    placeItems: "center",
    border: "0.1rem solid #cbdf24",
  },

  controlItem: {
    minWidth: "80%",
  },

  headerControls: {
    // width: "100%",
    // paddingTop: "0.1rem",
    display: "grid",
    placeItems: "center",
    // border: "0.5rem solid #0020e0",
  },

  MuiInput: {
    paddingBottom: "1rem",
    minWidth: "90%",
  },
}));

const validationSchema = Yup.object().shape({
  // collected: Yup.string().required(
  //   "Indiquer si Le(a) candidat(e) a pris le materiel de composition, est Obligatoire"
  // ),
  // handin: Yup.string().required(
  //   "Indiquer si Le(a) candidat(e) a remis sa feuille de composition, est Obligatoire"
  // ),
});
const CreateAttendance = () => {
  const classes = useStyles();
  const [state, setState, handleReactSelectChange, handleInputChange] = useForm(
    {
      centerExamSessionSpecialtyID: "",
      centerNumber: null,
      examID: "",
      sessionID: "",
      educTypeID: "",
      specialtyID: "",
      subjectSpecialty: "",
    }
  );

  const initialValues = {
    centerNumber: null,
    collected: "",
    handin: "",
    subjectSpecialty: "",
    candExamSecretCode: "",
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const {
    data: dataEducType,
    loading: loadingEducType,
    error: errEducType,
  } = useQuery(getAllEducationTypesQuery);

  const getEducationTypes = dataEducType && dataEducType.educationTypes;
  const refinedEducTypes =
    getEducationTypes && removeTypename(getEducationTypes);

  const { data: dataExams, loading: loadingExams, error: errExams } = useQuery(
    getAllExamsQuery
  );

  const getExams = dataExams && dataExams.exams;
  const removeExamName =
    getExams && getExams.map(({ examName, ...others }) => others);
  const refinedExams = getExams && removeTypename(removeExamName);

  const getExamName = refinedExams && {
    ...getSelectedObject(refinedExams, state.examID),
  };

  console.dir({ getExamName });
  console.dir({ refinedExams });
  const {
    data: dataSession,
    loading: loadingSession,
    error: errSession,
  } = useQuery(getAllSessionsQuery);

  const getSessions = dataSession && dataSession.sessions;

  const refinedSessions = getSessions && removeTypename(getSessions);

  const getSessionName = refinedSessions && {
    ...getSelectedObject(refinedSessions, state.sessionID),
  };

  const {
    data: dataExamSessions,
    error: errExamSessions,
    loading: loadingExamSession,
  } = useQuery(getExamSessionQuery, {
    skip: !state.examID || !state.sessionID,
    variables: {
      exam: getExamName,
      session: getSessionName,
    },
  });

  const getExamSessions = dataExamSessions && dataExamSessions.examSessions;
  const refinedES = getExamSessions && removeTypename(getExamSessions);
  const reducedES = refinedES && refinedES[0];

  const {
    data: dataCenter,
    error: errCenter,
    loading: loadingCenter,
  } = useQuery(getSingleCenterQuery, {
    variables: { centerNumber: state.centerNumber },
  });

  const { centerByNumber } = { ...dataCenter };
  const newCenterByNumber = removeTypename(centerByNumber);

  const { data: dataCES, error: errCES, loading: loadingCES } = useQuery(
    getSingleCenterExamSessionQuery,
    {
      skip: !reducedES || !newCenterByNumber,
      variables: {
        examSession: reducedES && reducedES,
        center: newCenterByNumber && newCenterByNumber,
      },
    }
  );
  console.dir({ state });
  const getCenterExamSessionsByCode =
    dataCES && dataCES.centerExamSessionsByCode;
  const refinedCenterExamSessions =
    getCenterExamSessionsByCode && removeTypename(getCenterExamSessionsByCode);
  // transform the array into a single object
  const getCESID = refinedCenterExamSessions && refinedCenterExamSessions[0];

  console.dir({ getCESID });
  const {
    data: dataSpecialtyCES,
    loading: loadingSpecialtyCES,
    error: errSpecialtyCES,
  } = useQuery(getAllSpecialtiesOfACenterExamSessionQuery, {
    variables: getCESID,
  });
  console.dir({ dataSpecialtyCES });
  const getCenterExamSession =
    dataSpecialtyCES && dataSpecialtyCES.centerExamSession;
  const { centerExamSessionSpecialty } = { ...getCenterExamSession };

  const newSpecialty =
    centerExamSessionSpecialty &&
    centerExamSessionSpecialty.map((item) => item);
  const refinedCESS = newSpecialty && removeTypename(newSpecialty);

  const getCESSSubjIDs =
    state.centerExamSessionSpecialtyID &&
    state.centerExamSessionSpecialtyID.split("/");
  console.dir({ getCESSSubjIDs });
  const {
    data: dataRegistration,
    loading: loadingReg,
    error: errReg,
  } = useQuery(getRegisteredCandidatesPerSpecialty, {
    skip: getCESSSubjIDs && !getCESSSubjIDs[0],
    variables: { id: getCESSSubjIDs && getCESSSubjIDs[0] },
  });

  const { centerExamSessionSpecialty: CESS } = { ...dataRegistration };
  const { registration } = { ...CESS };
  const getCandOptions =
    registration &&
    registration.map((item) => (
        {item.item.candidate.cand1stName.concat(
          item.candidate.cand2ndName,
          item.candRegistrationNumber
        )}
    ))

  const {
    data: dataSubjSpecialty,
    loading: loadingSubjSpecialty,
    error: errSubjSpecialty,
  } = useQuery(getAllSubjectSpecialtiesOfASpecialtyQuery, {
    skip: getCESSSubjIDs && !getCESSSubjIDs[1],
    variables: { id: getCESSSubjIDs && getCESSSubjIDs[1] },
  });

  const getSubjSpecialty = dataSubjSpecialty && dataSubjSpecialty.specialty;
  const { subjectSpecialty } = { ...getSubjSpecialty };

  const refinedSubjectSpecialty =
    subjectSpecialty && removeTypename(subjectSpecialty);
  const getSubjectSpecialtyOptions =
    refinedSubjectSpecialty &&
    refinedSubjectSpecialty.map((item) => {
      <MenuItem key={item.id}>{item.item.subject.subjectName}</MenuItem>;
    });

  const [createAttendance, { loading, error }] = useMutation(
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
            candExamSecretCode: values.candExamSecretCode.value,
            centerExamSessionSpecialty:
              getCESSSubjIDs && getObjectFromID(getCESSSubjIDs[0]),
            subjectSpecialty:
              refinedSubjectSpecialty &&
              getObjectFromID(values.subjectSpecialty.value),
          },
        });

        setTimeout(() => {
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ submitForm, setFieldValue, isSubmitting }) => {
        return (
          <Paper className={classes.pageStyled}>
            <Form>
              {(isSubmitting || loading) && <LinearProgress />}
              <Grid container>
                <Grid container>
                  <Grid item xs={12}>
                    <Error
                      error={
                        error ||
                        errCenter ||
                        errExams ||
                        errSession ||
                        errExamSessions ||
                        errSpecialtyCES ||
                        errEducType ||
                        errSubjSpecialty ||
                        errReg
                      }
                    />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12} className={classes.MuiGrid}>
                    <Typography
                      variant="h6"
                      className={classes.typographyStyled}
                    >
                      Présence des candidats à l'Ecrit
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item direction="column" xs={12} sm={6}>
                    <Field
                      component={TextField}
                      value={
                        (centerByNumber && centerByNumber.centerCode) || ""
                      }
                      name="centerName"
                      type="text"
                      label=" Nom du centre"
                    />
                    <Field
                      component={TextField}
                      onChange={handleChange}
                      name="centerNumber"
                      value={state.centerNumber && state.centerNumber}
                      type="number"
                      label="Numéro du centre"
                      disabled={isSubmitting}
                    />
                    <Field
                      select
                      component={TextField}
                      helperText="Type d'Enseignement"
                      onChange={handleInputChange}
                      name="educTypeID"
                      disabled={isSubmitting}
                    >
                      <MenuItem>Type d'enseignement</MenuItem>
                      {refinedEducTypes &&
                        refinedEducTypes.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.educationTypeName}
                          </MenuItem>
                        ))}
                    </Field>
                    <Field
                      component={TextField}
                      select
                      onChange={handleInputChange}
                      name="sessionID"
                      disabled={isSubmitting}
                      helperText="Session"
                    >
                      {refinedSessions &&
                        refinedSessions.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.sessionName}
                          </MenuItem>
                        ))}
                    </Field>
                    <SygefexMuiSelect
                      name="position"
                      label="position"
                      variant="standard"
                      options={
                        refinedEducTypes &&
                        refinedEducTypes.map((item) => (
                          <MenuItem key={item.id} value={item}>
                            {item.educationTypeName}
                          </MenuItem>
                        ))
                      }
                    />
                    <SygefexMuiSelect
                      name="opposition"
                      label="opposition"
                      variant="standard"
                      options={
                        getExams &&
                        getExams.map((item) => (
                          <MenuItem key={item.id} value={item}>
                            {item.examName}
                          </MenuItem>
                        ))
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.MuiGrid}>
                    <Field
                      helperText="Examen"
                      component={TextField}
                      select
                      onChange={handleInputChange}
                      name="examID"
                      disabled={isSubmitting}
                    >
                      {getExams &&
                        getExams.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.examName}
                          </MenuItem>
                        ))}
                    </Field>

                    <Field
                      select
                      component={TextField}
                      helperText="Specialty"
                      onChange={handleInputChange}
                      name="centerExamSessionSpecialtyID"
                      disabled={isSubmitting}
                    >
                      {refinedEducTypes &&
                        refinedEducTypes.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.educationTypeName}
                          </MenuItem>
                        ))}
                    </Field>

                    <Field
                      component={TextField}
                      select
                      helperText="Matiere"
                      onChange={(value) =>
                        setFieldValue("subjectSpecialty", value)
                      }
                      name="subjectSpecialty"
                      disabled={isSubmitting}
                    >
                      {refinedEducTypes &&
                        refinedEducTypes.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.educationTypeName}
                          </MenuItem>
                        ))}
                    </Field>

                    <Field
                      component={TextField}
                      select
                      helperText="Code Candidat"
                      onChange={(value) =>
                        setFieldValue("candExamSecretCode", value)
                      }
                      name="candExamSecretCode"
                      disabled={isSubmitting}
                    >
                      {refinedEducTypes &&
                        refinedEducTypes.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.educationTypeName}
                          </MenuItem>
                        ))}
                    </Field>

                    <Button onChange={submitForm} disabled={isSubmitting}>
                      Valid{isSubmitting ? "ation en cours" : "er"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};
export default CreateAttendance;
