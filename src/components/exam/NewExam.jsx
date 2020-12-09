import React, { useState } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { TextField } from "material-ui-formik-components/TextField";

import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/react-hooks";
import { createExamMutation } from "../queries&Mutations&Functions/Mutations";
import Notification from "../utils/Notification";

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
  examName: Yup.string().required("Nom examen Obligatoire"),
  examCode: Yup.string().required("Code examen Obligatoire"),
});

const NewExam = () => {
  const classes = useStyles();

  const initialValues = {
    examName: "",
    examCode: "",
  };

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [createExam, { loading, error }] = useMutation(createExamMutation);

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createExam({
          variables: {
            ...values,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Opération Réuissie",
            type: "success",
          });
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ submitForm, setFieldValue, isSubmitting }) => {
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
                        Nouvel Examen
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item xs={12} className={classes.centerAll}>
                      <Field
                        component={TextField}
                        name="examName"
                        type="text"
                        label="Nom Examen"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loading}
                        helpertext={<ErrorMessage name="examName" />}
                      />

                      <Field
                        component={TextField}
                        name="examCode"
                        type="text"
                        label="Code Examen"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loading}
                        helpertext={<ErrorMessage name="examCode" />}
                      />
                      <Notification notify={notify} setNotify={setNotify} />
                      <Button
                        disabled={isSubmitting || loading}
                        onClick={submitForm}
                      >
                        {(isSubmitting || loading) && <CircularProgress />}
                        {isSubmitting ? "création en cours" : "Crée Examen"}
                      </Button>
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
export default NewExam;
