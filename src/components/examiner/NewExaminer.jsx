import Error from "../ErrorMessage.js";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useForm from "../utils/useForm";
import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
import * as Yup from "yup";
import { createExaminerMutation } from "../queries&Mutations&Functions/Mutations";

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
import Notification from "../utils/Notification";

import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/react-hooks";

const useStyles = makeStyles({
  
  pageStyled: {
    display: "grid",
    placeItems: "center",
    // marginTop: "2rem",
    padding: "1rem",
    maxWidth: "50%",
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
    height: "auto",
    width: "100%",
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
  examiner1stName: Yup.string().required("Nom obligatoire"),
  examiner2ndName: Yup.string().required("Prénom obligatoire"),
  examinerOtherNames: Yup.string(),
  examinerOtherNames: Yup.string().required("Photo obligatoire"),
  examinerCNI: Yup.string().required("Noms de la mere obligatoire"),
  examinerMatricule: Yup.string().required("Noms du pere obligatoire"),
  examinerPhone: Yup.number().required("Numéro de portable obligatoire"),
  gender: Yup.string().required("Choix du sexe obligatoire"),
  examinerEmail: Yup.string()
    .email("Email invalide")
    .required("Email obligatoire"),
});

const Newexamineridates = () => {
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
    examiner1stName: "",
    examiner2ndName: "",
    examinerOtherNames: "",
    examinerCNI: "",
    examinerMatricule: "",
    examinerEmail: "",
    examinerImage: "",
    examinerPhone: "",
    gender: "",
  };
  const { examinerImage } = state;
  const uploadFile = async (e) => {
    setState((state) => ({ ...state, examinerImage: "" }));
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
    setState((state) => ({ ...state, examinerImage: file.secure_url }));
  };

  console.log(examinerImage);
  const [createExaminer, { error, loadingMut }] = useMutation(
    createExaminerMutation
  );
  console.log(state);
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createExaminer({
          variables: {
            ...values,
            examinerImage: examinerImage,
          },
        });
        router.push({
          pathname: "/show/singleExaminer",
          query: {
            id: res.data.createExaminer.id,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Nouvelle session crééé avec success",
            type: "success",
          });
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
                      variant="h5"
                      component="h6"
                    >
                      Renseignement Examinateur
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item className={classes.centerAll} xs={12} sm={6}>
                    <Field
                      helpertext={<ErrorMessage name="file" />}
                      component={TextField}
                      variant="outlined"
                      name="file"
                      type="file"
                      onChange={uploadFile}
                      disabled={isSubmitting}
                    />

                    <Field
                      helpertext={<ErrorMessage name="examiner1stName" />}
                      component={TextField}
                      variant="outlined"
                      name="examiner1stName"
                      type="text"
                      label="Nom"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="examiner2ndName" />}
                      component={TextField}
                      variant="outlined"
                      name="examiner2ndName"
                      type="text"
                      label="Prénom"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="examinerOtherNames" />}
                      component={TextField}
                      variant="outlined"
                      name="examinerOtherNames"
                      type="text"
                      label="Autres Noms"
                      disabled={isSubmitting}
                    />

                    <Field
                      helpertext={<ErrorMessage name="examinerMatricule" />}
                      component={TextField}
                      variant="outlined"
                      name="examinerMatricule"
                      type="text"
                      label="Matricule"
                      disabled={isSubmitting}
                    />
                    <Field
                      helpertext={<ErrorMessage name="examinerCNI" />}
                      component={TextField}
                      variant="outlined"
                      name="examinerCNI"
                      type="text"
                      label="Numéro de CNI"
                      disabled={isSubmitting}
                    />

                    <Field
                      helpertext={<ErrorMessage name="examinerPhone" />}
                      component={TextField}
                      variant="outlined"
                      name="examinerPhone"
                      type="number"
                      label="Numéro de portable"
                      disabled={isSubmitting}
                    />
                  </Grid>

                  <Grid item className={classes.partTwo} xs={12} sm={6}>
                    <Field
                      helpertext={<ErrorMessage name="examinerEmail" />}
                      component={TextField}
                      variant="outlined"
                      name="examinerEmail"
                      type="email"
                      label="Email"
                      disabled={isSubmitting}
                    />

                    <Field
                      helpertext={<ErrorMessage name="gender" />}
                      required
                      name="gender"
                      component={FRadioGroup}
                      variant="outlined"
                      label="Sexe"
                      options={[
                        { value: "M", label: "Male" },
                        { value: "F", label: "Femele" },
                      ]}
                      groupProps={{ row: true }}
                    />

                    <div className={classes.picStyled}>
                      {!examinerImage ? (
                        <CircularProgress />
                      ) : (
                        <img
                          style={{
                            height: "10rem",
                            width: "10rem",
                            display: "grid",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            placeItems: "center",
                            borderRadius: "0.5rem",
                          }}
                          src={examinerImage}
                          alt="Upload image"
                        />
                      )}
                    </div>
                    <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {(isSubmitting || loadingMut) && <CircularProgress />}
                      {isSubmitting ? "Création en cours" : "Crée Examinateur"}
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
export default Newexamineridates;
