import React from "react";
import Error from "../ErrorMessage.js";
import { Formik, Form, Field } from "formik";
import { TextField, container, paper } from "formik-material-ui";
import { Button, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { orange, red } from "@material-ui/core/colors";
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

  allControls: {
    display: "flex",
    flexDirection: "column",
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
          <div>
            <h4>Acceder a son compte</h4>
            <Error error={error} />

            <Form>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyItems="center"
                margin={0.5}
                Style={{ minHeight: "100vh" }}
                spacing={5}
                background="orange"
              >
                <Field
                  name="email"
                  component={TextField}
                  type="email"
                  label="Email"
                  disabled={isSubmitting || loading}
                  style={{ marginBottom: "1rem" }}
                />

                <Field
                  name="password"
                  component={TextField}
                  type="password"
                  label="Mot de passe"
                  disabled={isSubmitting || loading}
                  style={{ marginBottom: "1rem" }}
                />

                <ul>
                  <h6>Pas encore de compte?</h6>
                  <Link href="/creates/signup">
                    <a>Créez votre compte</a>
                  </Link>
                </ul>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    style={{ marginBottom: "1rem" }}
                  >
                    Valid{isSubmitting ? "ation en cours" : "er"}
                  </Button>
                </Box>
              </Grid>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default Login;
