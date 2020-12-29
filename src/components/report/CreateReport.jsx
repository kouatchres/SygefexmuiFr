import React, { useState, useEffect } from "react";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Link from "next/link";

import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import Notification from "../utils/Notification";

import * as Yup from "yup";
import useForm from "../utils/useForm";
import { createNewReportMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getSelectedObject,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getSingleCenterQuery,
  getCESExaminerQuery,
} from "../queries&Mutations&Functions/Queries";

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
    minWidth: "30%",
    maxWidth: "40%",
    // borderRadius: "0.8rem",
    // borderBottom: "0.4rem solid #c89666",
    // borderTop: "0.4rem solid #829079",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  picStyled: {
    paddingLeft: "1rem",
    height: "15rem",
    width: "12rem",
    display: "grid",
    placeItems: "center",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "30%",
  },
});

const validationSchema = Yup.object().shape({
  reportName: Yup.string().required("Titre du rapport obligatoire"),
  examinerCode: Yup.string().required("Code examinateur Obligatoire"),
});

const CreateReport = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const initialValues = {
    reportName: "",
    reportImage: "",
    centerNumber: "",
    examinerCode: "",
  };

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [state, setState, handleSelectChange, handleInputChange] = useForm({
    reportImage: "",
    centerNumber: "",
    examID: "",
    sessionID: "",
    exams: [],
    sessions: [],
    centerByNumber: "",
    examSessions: "",
    centerExamSessions: "",
    examinerCode: "",
    CESExaminer: "",
  });

  const {
    CESExaminer,
    reportImage,
    centerNumber,
    examID,
    sessionID,
    exams,
    sessions,
    centerByNumber,
    examSessions,
    centerExamSessions,
    examinerCode,
  } = state;

  const makeExaminerObject = (profCodeValue) => {
    const storedProf = {
      examinerCode: `${profCodeValue}`,
    };
    return storedProf;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ineximages");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/inex/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setState((prev) => ({ ...prev, reportImage: file.secure_url }));
    {
      !reportImage && <CircularProgress />;
    }
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
      examSessions:"",
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
      centerByNumber:"",
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
      centerExamsessions:"",
    }));
    loadCESData();
  }, [centerNumber, examSessions]);

  // transform the array into a single object
  const getCESID = centerExamSessions && centerExamSessions[0];
  console.log(getCESID);

  console.log(centerByNumber);

  const loadExaminerData = async () => {
    const { error, data } = await client.query({
      skip: !getCESID || !examinerCode,
      query: getCESExaminerQuery,
      variables: {
        centerExamSession: getCESID && getCESID,
        examiner: examinerCode && makeExaminerObject(examinerCode),
      },
    });
    const getCESExaminers = data && data.getCenterExamSessionExaminers;
    const refinedCESExaminer =
      getCESExaminers && removeTypename(getCESExaminers);
    const reducedCESExaminer = refinedCESExaminer && refinedCESExaminer[0];
    console.log(reducedCESExaminer);
    setState((prev) => ({
      ...prev,
      CESExaminer: reducedCESExaminer,
    }));
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      CESExaminer:"",
    }));
    loadExaminerData();
  }, [getCESID, examinerCode]);

  const [createReport, { loading, error }] = useMutation(
    createNewReportMutation
  );
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createReport({
          variables: {
            ...values,
            reportImage: reportImage,
            centerExamSessionExaminer: CESExaminer && CESExaminer,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Rapport créé avec success",
            type: "success",
          });
          resetForm({ values: "" });
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ submitForm, isSubmitting }) => {
        return (
          <div className={classes.centerAll}>
            <Paper className={classes.pageStyled} elevation={3}>
              <Form aria-busy={isSubmitting}>
                {(isSubmitting || loading) && <LinearProgress />}
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
                        Rapport de fin de session
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={10}>
                    <Grid item className={classes.centerAll} xs={12}>
                      <Field
                        component={TextField}
                        variant="outlined"
                        helpertext={<ErrorMessage name="file" />}
                        label="Choisir le rapport"
                        name="file"
                        type="file"
                        accept="application/pdf"
                        onChange={uploadFile}
                        disabled={isSubmitting}
                      />
                      <Field
                        name="centerName"
                        component={TextField}
                        label="Nom du centre"
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
                        value={(centerNumber && centerNumber) || 0}
                        onChange={handleInputChange}
                        variant="outlined"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="centerNumber" />}
                      />

                      <Field
                        variant="outlined"
                        helpertext={<ErrorMessage name="sessionID" />}
                        component={Select}
                        options={getSessionsOptions}
                        onChange={(event) => {
                          handleSelectChange(event, "sessionID");
                        }}
                        name="sessionID"
                        label="Session"
                        disabled={isSubmitting}
                      />
                      <Field
                        variant="outlined"
                        helpertext={<ErrorMessage name="examID" />}
                        component={Select}
                        label="Examen"
                        options={getExamsOptions}
                        onChange={(event) => {
                          handleSelectChange(event, "examID");
                        }}
                        name="examID"
                        disabled={isSubmitting}
                      />
                      <Field
                        variant="outlined"
                        helpertext={<ErrorMessage name="reportName" />}
                        component={TextField}
                        name="reportName"
                        label="Titre du Rapport"
                        disabled={isSubmitting}
                      />
                      <Field
                        variant="outlined"
                        helpertext={<ErrorMessage name="examinerCode" />}
                        component={TextField}
                        // onChange={handleInputChange}
                        // value={examinerCode}
                        name="examinerCode"
                        label="Code examinateur"
                        disabled={isSubmitting}
                      />
                      <div
                        style={{
                          display: "flex",
                          minWidth: "5rem",
                        }}
                      >
                        <Button>
                          <Link
                            href={{
                              pathname: reportImage && reportImage,
                            }}
                          >
                            <a target="_blank">Voir rapport</a>
                          </Link>
                        </Button>

                        <Notification notify={notify} setNotify={setNotify} />
                        <Button disabled={isSubmitting} onClick={submitForm}>
                          {(isSubmitting || loading) && <CircularProgress />}
                          {isSubmitting
                            ? "Rapport en création"
                            : "Créer Rapport"}
                        </Button>
                      </div>
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
export default CreateReport;
