import React from "react";
import Error from "../ErrorMessage.js";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Grid, Typography, Paper, FormGroup, Button } from "@material-ui/core";
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
  listStyled: {
    display: "grid",
    placeItems: "left",
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
    height: "80vh",
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
          <Paper className={classes.pageStyled} elevation={15}>
            <Error error={error} />
            <Form>
              <Grid
                paddingTop="0.1rem"
                className={classes.allControls}
                container
                direction="column"
                alignItems="center"
                justifyItems="center"
              >
                <Typography className={classes.titleStyled} variant="h6">
                  Créer un nouveau compte
                </Typography>
                <FormGroup
                  className={classes.formGroupStyled}
                  direction="column"
                  alignItems="center"
                  justifyItems="center"
                >
                  <Field
                    name="email"
                    component={TextField}
                    type="email"
                    label="Email"
                    fullWidth
                    disabled={isSubmitting || loading}
                  />
                </FormGroup>
                <FormGroup
                  className={classes.formGroupStyled}
                  direction="column"
                >
                  <Field
                    name="name"
                    component={TextField}
                    type="text"
                    fullWidth
                    label="Nom"
                    disabled={isSubmitting || loading}
                  />
                </FormGroup>
                <FormGroup
                  className={classes.formGroupStyled}
                  direction="column"
                >
                  <Field
                    name="password"
                    component={TextField}
                    type="password"
                    fullWidth
                    label="Mot de passe"
                    disabled={isSubmitting || loading}
                  />
                </FormGroup>
                <Typography className={classes.titleStyled} variant="h6">
                  Vous avez deja un compte?
                </Typography>
                <ul className={classes.listStyled}>
                  <Link href="/creates/login">
                    <a>Connectez-vous</a>
                  </Link>
                </ul>
                <FormGroup
                  className={classes.formGroupStyled}
                  direction="column"
                >
                  <Button disabled={isSubmitting} onClick={submitForm}>
                    Valid{isSubmitting ? "ation en cours" : "er"}
                  </Button>
                </FormGroup>
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};
export default Signup;
