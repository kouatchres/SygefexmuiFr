import Error from "../ErrorMessage.js";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useForm from "../utils/useForm";
import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
import * as Yup from "yup";
import { createMultipleCandidatesMutation } from "../queries&Mutations&Functions/Mutations";
import Notification from "../utils/Notification";

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
    height: "90vh",
  },
  pageStyled: {
    display: "grid",
    placeItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    maxWidth: "80%",
    minWidth: "21rem",
    borderRadius: "0.8rem",
    borderBottom: "0.4rem solid #c89666",
    borderTop: "0.4rem solid #829079",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  partTwo: {
    display: "grid",
    gridTemplateRows: "1fr 1fr ",
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

const NewCandidates = () => {
  const classes = useStyles();
  const router = useRouter();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [state, setState] = useForm({
    image: "",
    dateOfBirth: new Date("2018-01-01T00:00"),
    // selectedDateString: new Date("2001-07-04T12:08:54"),
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

  const uploadFile = async (e) => {
    setState((state) => ({ ...state, image: "" }));
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
    setState((state) => ({ ...state, image: file.secure_url }));
  };

  const convertToDefEventPara = (name, value) => {
    target: {
      name, value;
    }
  };

  const handleDateChange = (name, value) => {
    setState((state) => ({ ...state, [name]: value }));
  };

  // console.log(image);
  const [createMultipleCandidates, { error, loadingMut }] = useMutation(
    createMultipleCandidatesMutation
  );
  console.log(state);
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createMultipleCandidates({
          variables: {
            ...values,
            image: state.image,
            dateOfBirth: state.dateOfBirth,
          },
        });
        router.push({
          pathname: "/show/singleCand",
          query: {
            id: res.data.createMultipleCandidates.id,
          },
        });
      
        setTimeout(() => {
          setNotify({
            isOpen: true,
            message: "Renseignement du candidat Réuissi",
            type: "success",
          });
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm();
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ submitForm, values, setFieldValue, isSubmitting }) => (
        <div className={classes.centerAll}>
          <Paper className={classes.pageStyled} elevation={13}>
            <Form aria-busy={isSubmitting}>
              {(isSubmitting || loadingMut) && <LinearProgress />}
              <Grid className={classes.centerAll} container>
                <Grid container className={classes.centerAll}>
                  <Grid item>
                    <Error error={error} />
                    <Typography
                      className={classes.titleStyled}
                      color="primary"
                      gutterBottom
                      variant="h6"
                      component="h5"
                    >
                      Renseignement des Candidats
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item className={classes.centerAll} xs={12} sm={6}>
                    <Field
                      helpertext={<ErrorMessage name="file" />}
                      component={TextField}
                      variant="outlined"
                      label="Choisir ta photo"
                      name="file"
                      type="file"
                      // accept="image/jpg, image/png, image/jpeg"
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

                  <Grid item className={classes.partTwo} xs={12} sm={6}>
                    <Field
                      helpertext={<ErrorMessage name="email" />}
                      component={TextField}
                      variant="outlined"
                      name="email"
                      type="email"
                      label="Email"
                      disabled={isSubmitting}
                    />

                    <Field
                      helpertext={<ErrorMessage name="Gender" />}
                      required
                      name="gender"
                      component={FRadioGroup}
                      variant="outlined"
                      label="Gender"
                      options={[
                        { value: "M", label: "Male" },
                        { value: "F", label: "Femele" },
                      ]}
                      groupProps={{ row: true }}
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
                        value={state.dateOfBirth}
                        openTo="year"
                        disableFuture
                        onChange={(event) =>
                          handleDateChange("dateOfBirth", event._d)
                        }
                        //  formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                      />
                    </MuiPickersUtilsProvider>
                    <div className={classes.picStyled}>
                      {!state.image ? (
                        <CircularProgress />
                      ) : (
                        <img
                          style={{
                            height: "15rem",
                            width: "auto",
                            display: "grid",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            placeItems: "center",
                            borderRadius: "0.5rem",
                          }}
                          src={state.image}
                          alt="Upload image"
                        />
                      )}
                    </div>
                    <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {(isSubmitting || loadingMut) && <CircularProgress />}
                      {isSubmitting ? "Création en cours" : "Crée Candidat"}
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
export default NewCandidates;
