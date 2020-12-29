import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
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

import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { getObjectFromID } from "../queries&Mutations&Functions/Functions";
import { createSpecialtyMutation } from "../queries&Mutations&Functions/Mutations";
import { getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";

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
    minWidth: "30%",
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
  specialtyName: Yup.string().required("Libéllé de la série obligatoire"),
  specialtyCode: Yup.string().required("Code de la série obligatoire"),
  educType: Yup.string().required("Choissisez un type d'enseignement"),
});

const NewSpecialty = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [educType, setEducType] = useState([]);

  
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const initialValues = {
    specialtyName: "",
    specialtyCode: "",
    educType: "",
  };
  const loadEducTypeData = async () => {
    const { error, data, loading } = await client.query({
      query: getAllEducationTypesQuery,
    });
    console.log(data.educationTypes);
    setEducType(data.educationTypes);
  };

  useEffect(() => {
    loadEducTypeData();
  }, []);
  const getEducTypeOptions =
    educType &&
    educType.map((item) => ({ value: item.id, label: item.educationTypeName }));

  const [createSpecialty, { loading, error }] = useMutation(
    createSpecialtyMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSpecialty({
          variables: {
            ...values,
            educationType: values.educType && getObjectFromID(values.educType),
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
           setNotify({
            isOpen: true,
            message: "Nouvelle serie crééé avec success",
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
            <Paper className={classes.pageStyled} elevation={20}>
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
                        Nouvelle Spécialité
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item className={classes.centerAll}>
                      <Field
                        component={Select}
                        variant="outlined"
                        name="educType"
                        label="Type d'enseignement"
                        // placeholder="la Région"
                        disabled={isSubmitting}
                        options={getEducTypeOptions}
                        helpertext={<ErrorMessage name="educType" />}
                      />
                      <Field
                        component={TextField}
                        autocomplete="off"
                        name="specialtyName"
                        type="text"
                        label="Libellé Spécialité"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loading}
                        helpertext={<ErrorMessage name="specialtyName" />}
                      />

                      <Field
                        component={TextField}
                        autocomplete="off"
                        name="specialtyCode"
                        type="text"
                        label="Code Spécialité"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loading}
                        helpertext={<ErrorMessage name="specialtyCode" />}
                      />
                    <Notification notify={notify} setNotify={setNotify} />

                      <Button
                        disabled={isSubmitting || loading}
                        onClick={submitForm}
                      >
                        {(isSubmitting || loading) && <CircularProgress />}
                        {isSubmitting ? "création en cours" : "Crée Spécialité"}
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
export default NewSpecialty;
