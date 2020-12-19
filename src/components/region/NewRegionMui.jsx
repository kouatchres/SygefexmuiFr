import React, { useState } from "react";
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
import * as Yup from "yup";
import Notification from "../utils/Notification";
import { useMutation } from "@apollo/react-hooks";
import { createNewRegionMutation } from "../queries&Mutations&Functions/Mutations";

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
    borderRadius: "0.8rem",
    borderBottom: "0.4rem solid #c89666",
    borderTop: "0.4rem solid #829079",
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
  regName: Yup.string().required("Libellé Région Obligatoire"),
  regCode: Yup.string().required("Code Région Obligatoire"),
});

const NewRegionMui = () => {
  const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const initialValues = {
    regName: "",
    regCode: "",
  };
  const [createRegion, { loading, error }] = useMutation(
    createNewRegionMutation,
    {
      refetchQueries: ["currentUserQuery"],
    }
  );
  // 675 059 039
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createRegion({
          variables: { ...values },
        });
        
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Nouvelle Région crééé avec success",
            type: "success",
          });
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
                        Nouvelle Région
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.centerAll}>
                    <Field
                      name="regName"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Libellé Région"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                      helpertext={<ErrorMessage name="regName" />}
                    />
                    <Field
                      name="regCode"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Code Région"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                      helpertext={<ErrorMessage name="regCode" />}
                    />
                    <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {(isSubmitting || loading) && <CircularProgress />}
                      {isSubmitting || loading
                        ? "Région en création"
                        : "Crée Région"}
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
export default NewRegionMui;
