import React from "react";
import Error from "../ErrorMessage.js";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { signupUserMutation } from "../queries&Mutations&Functions/Mutations";

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
    minWidth: "30vw",
  },
  listStyled: {
    display: "grid",
    placeItems: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    paddingTop: "0.1rem",
  },
  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  allControls: {
    display: "grid",
    placeItems: "center",
    paddingTop: "0.2rem",
    border: "0.05rem solid #1254ac",
    // width: "20vw",
    borderRadius: "0.5rem",
    // marginTop: "2rem",
  },
  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "30vw",
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

  const [signup, { loading, error }] = useMutation(signupUserMutation, {
    refetchQueries: ["currentUserQuery"],
  });

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
            <Paper className={classes.pageStyled} elevation={3}>
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
                        Nouveau Compte
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.centerAll}>
                    <Field
                      name="email"
                      component={TextField}
                      type="email"
                      fullWidth
                      label="Email"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                      helperText={<ErrorMessage name="email" />}
                    />
                    <Field
                      name="name"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Name"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                      helperText={<ErrorMessage name="name" />}
                    />
                    <Field
                      name="password"
                      component={TextField}
                      type="password"
                      fullWidth
                      label="Password"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                      helperText={<ErrorMessage name="password" />}
                    />
                    <Typography variant="body2" className={classes.centerAll}>
                      Avez-Vous un compte?
                    </Typography>
                    <ul className={classes.listStyled}>
                      <Typography variant="body2">
                        <Link href="/creates/login">
                          <a>Connectez-vous ici</a>
                        </Link>
                      </Typography>
                    </ul>

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {(isSubmitting || loading) && <CircularProgress />}
                      {isSubmitting || loading
                        ? "Création de compte"
                        : "Crée compte"}
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
