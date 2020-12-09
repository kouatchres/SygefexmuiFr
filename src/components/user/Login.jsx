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
import { loginUserMutation } from "../queries&Mutations&Functions/Mutations";

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
    .min(3, "Email 3 characters au moins")
    .required("Email Obligatoire")
    .email("Email invalide"),

  password: Yup.string()
    .required("Mot de passe Obligatoire")
    .min(3, "Mot de passe 3 characters au moins"),
});

const Login = () => {
  const classes = useStyles();
  const initialValues = {
    email: "",
    password: "",
  };

  const [login, { loading, error }] = useMutation(loginUserMutation, {
    refetchQueries: ["currentUserQuery"],
  });

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await login({
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
                        Connexion
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
                      helpertext={<ErrorMessage name="email" />}
                    />
                    <Field
                      name="password"
                      component={TextField}
                      type="password"
                      fullWidth
                      label="password"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                      helpertext={<ErrorMessage name="password" />}
                    />
                    <Typography variant="body2" className={classes.centerAll}>
                      Pas encore de compte?
                    </Typography>
                    <ul className={classes.listStyled}>
                      <Typography variant="body2">
                        <Link href="/creates/signup">
                          <a>Créer un compte</a>
                        </Link>
                      </Typography>
                    </ul>

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {(isSubmitting || loading) && <CircularProgress />}
                      {isSubmitting || loading
                        ? "Connection en cours"
                        : "se Connecter"}
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
export default Login;

// <Field
//   name="password"
//   component={TextField}
//   type="password"
//   label="Mot de passe"
//   disabled={isSubmitting || loading}
// />
