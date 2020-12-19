import React, { useEffect, useState } from "react";
import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
import * as Yup from "yup";
import Notification from "../utils/Notification";
import { updateCandidateMutation } from "../queries&Mutations&Functions/Mutations";
import { singleCandidateQuery } from "../queries&Mutations&Functions/Queries";

import { TextField } from "material-ui-formik-components/TextField";
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
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const useStyles = makeStyles({
  divStyled: {
    display: "grid",
    placeItems: "center",
    top: "2rem",
    // height: "90vh",
  },
  pageStyled: {
    display: "grid",
    placeItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    minWidth: "70%",
    borderRadius: "0.8rem",
    borderBottom: "0.4rem solid #c89666",
    borderTop: "0.4rem solid #829079",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },
  MuiFormControl: {
    root: {
      margin: "0rem",
    },
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
    minWidth: "40%",
  },
});

const validationSchema = Yup.object().shape({
  cand1stName: Yup.string().required("Nom obligatoire"),
  cand2ndName: Yup.string().required("Prénom obligatoire"),
  cand3rdName: Yup.string(),
  momName: Yup.string().required("Noms de la mere obligatoire"),
  dadName: Yup.string().required("Noms du pere obligatoire"),
  placeOfBirth: Yup.string().required("Lieu de naissance obligatoire"),
  birthCertNumber: Yup.string().required(
    "Numéro de l'acte de naissance obligatoire"
  ),
  phoneNumb: Yup.number().required("Numéro de portable obligatoire"),
  gender: Yup.string().required("Choix du sexe obligatoire"),
  email: Yup.string().email("Email invalide").required("Email obligatoire"),
});

const NewUpdateCandidate = ({ id }) => {
  const classes = useStyles();
  const client = useApolloClient();
  const [candidateInfo, setCandidateInfo] = useState([]);

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
    setCandidateInfo((prev) => ({ ...prev, image: file.secure_url }));
  };

  const loadCandidateData = async () => {
    const { data } = await client.query({
      query: singleCandidateQuery,
      variables: { id },
    });
    const getCandInfo = data.candidate;
    setCandidateInfo(getCandInfo);
  };

  useEffect(() => {
    loadCandidateData();
  }, []);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const initialValues = {
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    momName: "",
    dadName: "",
    email: "",
    image: "",
    phoneNumb: "",
    placeOfBirth: "",
    birthCertNumber: "",
    gender: "",
  };

  const handleDateChange = (name, value) => {
    setCandidateInfo((prev) => ({ ...prev, [name]: value }));
  };

  const [updateCandidate, { loadingMut }] = useMutation(
    updateCandidateMutation
  );

  console.dir(candidateInfo.gender);
  return (
    <Formik
      method="POST"
      initialValues={candidateInfo || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        const res = await updateCandidate({
          variables: {
            ...values,
            id,
          },
        });

        setTimeout(() => {
          setNotify({
            isOpen: true,
            message: "Modification info candidat réuissie",
            type: "success",
          });
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm();
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <div className={classes.centerAll}>
          <Paper className={classes.pageStyled} elevation={13}>
            <Form aria-busy={isSubmitting}>
              {(isSubmitting || loadingMut) && <LinearProgress />}
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
                      Modification Info Candidat
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={4}>
                  <Grid item className={classes.centerAll} xs={12} sm={6}>
                    <Field
                      helpertext={<ErrorMessage name="file" />}
                      component={TextField}
                      variant="outlined"
                      label="Choisir ta photo"
                      name="file"
                      type="file"
                      onChange={uploadFile}
                      disabled={isSubmitting}
                    />

                    <Field
                      helpertext={<ErrorMessage name="cand1stName" />}
                      component={TextField}
                      variant="outlined"
                      name="cand1stName"
                      type="text"
                      label="Nom"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="cand2ndName" />}
                      component={TextField}
                      variant="outlined"
                      name="cand2ndName"
                      type="text"
                      label="Prénom"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="cand3rdName" />}
                      component={TextField}
                      variant="outlined"
                      name="cand3rdName"
                      type="text"
                      label="Autres Noms"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="placeOfBirth" />}
                      component={TextField}
                      variant="outlined"
                      name="placeOfBirth"
                      type="text"
                      label="Lieu de Naissance"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="dadName" />}
                      component={TextField}
                      variant="outlined"
                      name="dadName"
                      type="text"
                      label="Noms du pere"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="momName" />}
                      component={TextField}
                      variant="outlined"
                      name="momName"
                      type="text"
                      label="Noms de la mere"
                      disabled={isSubmitting}
                    />

                    <Field
                      helpertext={<ErrorMessage name="birthCertNumber" />}
                      component={TextField}
                      variant="outlined"
                      name="birthCertNumber"
                      type="text"
                      label="Numéro acte de Naissance"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="phoneNumb" />}
                      component={TextField}
                      variant="outlined"
                      name="phoneNumb"
                      type="number"
                      label="Numéro de portable"
                      disabled={isSubmitting}
                    />
                  </Grid>

                  <Grid item className={classes.centerAll} xs={12} sm={6}>
                    <Field
                      helpertext={<ErrorMessage name="email" />}
                      component={TextField}
                      variant="outlined"
                      name="email"
                      type="email"
                      label="Email"
                      disabled={isSubmitting}
                    />
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <KeyboardDatePicker
                        helpertext={<ErrorMessage name="dateOfBirth" />}
                        variant="inline"
                        inputVariant="outlined"
                        autoOk
                        margin="normal"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        label="Birth Date"
                        format="DD MMMM YYYY"
                        value={candidateInfo.dateOfBirth}
                        openTo="year"
                        disableFuture
                        onChange={(event) =>
                          handleDateChange("dateOfBirth", event._d)
                        }
                      />
                    </MuiPickersUtilsProvider>

                    <Field
                      helpertext={<ErrorMessage name="gender" />}
                      required
                      name="gender"
                      id="gender"
                      value={candidateInfo.gender}
                      component={FRadioGroup}
                      variant="outlined"
                      label="Sexe"
                      options={[
                        { value: "M", label: "Male" },
                        { value: "F", label: "Femele" },
                      ]}
                      groupProps={{ row: true }}
                    />

                    <div>
                      {!candidateInfo.image ? (
                        <CircularProgress />
                      ) : (
                        <img
                          style={{
                            height: "15rem",
                            width: "15rem",
                            display: "grid",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            placeItems: "center",
                            borderRadius: "0.5rem",
                          }}
                          src={candidateInfo.image}
                          alt="Upload image"
                        />
                      )}
                    </div>
                    <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {(isSubmitting || loadingMut) && <CircularProgress />}
                      {isSubmitting
                        ? "Modification en cours"
                        : "Confirme modification"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        </div>
      )}
    </Formik>
  );
};
export default NewUpdateCandidate;
