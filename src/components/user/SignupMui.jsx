import React from "react";
import Error from "../ErrorMessage.js";
import Link from "next/link";
import { Formik, Form, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import SygefexMuiInput from "../muiComponents/controls/SygefexMuiInput";

import {
  Typography,
  Button,
  Grid,
  Paper,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { signupUserMutation } from "../queries&Mutations&Functions/Mutations";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // fontSize: 100,
  },
  centerAll: {
    display: "grid",
    placeItems: "center",
  },

  listStyled: {
    display: "grid",
    placeItems: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    paddingTop: "0.1rem",
  },
  pageStyled: {
    display: "grid",
    placeItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    minWidth: "20%",
  },
  formGroupStyled: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    width: "90%",
    // paddingLeft: "1rem",
    // borderRadius: "0.5rem",
  },
  titleStyled: {
    paddingTop: "1rem",
    display: "grid",
    placeItems: "center",
    alignItems: "center",
    justifyItems: "center",
  },

  allControls: {
    paddingTop: "0.1rem",
    border: "0.05rem solid #1254ac",
    width: "20vw",
    borderRadius: "0.5rem",
  },
  pap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contain: {
    maxWidth: "20rem",
  },
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Email, 3 characters au moins")
    .required("Email Obligatoire")
    .email("Email invalide"),
  name: Yup.string()
    .min(3, "Nom, 3 characters au moins")
    .required("Nom Obligatoire"),
  password: Yup.string()
    .required("Mot de passe Obligatoire")
    .min(8, "Mot de passe, 8 characters au moins"),
});

const Signup = () => {
  const classes = useStyles();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [signup, { loading, error }] = useMutation(signupUserMutation);

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await signup({
          variables: { ...values },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ submitForm, isSubmitting }) => {
        return (
          <div className={classes.centerAll}>
            <Paper elevation={5} className={classes.pageStyled}>
              <Form>
                {(isSubmitting || loading) && <LinearProgress />}
                <Grid container className={classes.centerAll}>
                  <Grid item>
                    <Error error={error} />
                  </Grid>
                </Grid>
                <Grid container className={classes.centerAll}>
                  <Grid item>
                    <Typography variant="body1">Nouveau compte</Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.centerAll}>
                  <Grid item className={classes.centerAll}>
                    <SygefexMuiInput
                      helperText={<ErrorMessage name="email" />}
                      name="email"
                      component={TextField}
                      type="email"
                      label="Email"
                      fullWidth
                      variant="standard"
                      disabled={isSubmitting || loading}
                    />

                    <SygefexMuiInput
                      helperText={<ErrorMessage name="name" />}
                      name="name"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Nom"
                      variant="standard"
                      disabled={isSubmitting || loading}
                    />

                    <SygefexMuiInput
                      helperText={<ErrorMessage name="password" />}
                      name="password"
                      component={TextField}
                      type="password"
                      fullWidth
                      label="Mot de passe"
                      variant="standard"
                      disabled={isSubmitting || loading}
                    />

                    <Typography variant="body2" className={classes.centerAll}>
                      Avez-Vous un compte?
                    </Typography>
                    <ul className={classes.listStyled}>
                      <Typography variant="body2">
                        <Link href="/creates/login">
                          <a>Acceder a votre compte</a>
                        </Link>
                      </Typography>
                    </ul>

                    <Button
                      disabled={isSubmitting}
                      onClick={submitForm}
                      className={classes.centerAll}
                    >
                      Valid{isSubmitting ? "ation en cours" : "er"}
                    </Button>
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
export default Signup;
