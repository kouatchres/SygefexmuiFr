import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
import {
  getObjectFromID,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";

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
import * as Yup from "yup";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";
import { createNewSubjectMutation } from "../queries&Mutations&Functions/Mutations";

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
    maxWidth: "30vw",
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
    // minWidth: "30vw",
  },
});

const validationSchema = Yup.object().shape({
  subjectName: Yup.string().required("Libellé matière Obligatoire"),
  subjectCode: Yup.string().required("Code matière Obligatoire"),
});

const NewSubject = () => {
  const client = useApolloClient();
  const classes = useStyles();

  const [state, setState] = useState([]);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const initialValues = {
    subjectName: "",
    subjectCode: "",
  };

  const facObligCheck = () => {
    if (document.getElementById("optional").checked) {
      document.getElementById("optionalSubjsGroup").style.display = "block";
    } else if (document.getElementById("obligatory").checked) {
      document.getElementById("optionalSubjsGroup").style.display = "none";
    }
  };

  const loadEducTypeData = async () => {
    const { data } = await client.query({
      query: getAllEducationTypesQuery,
    });
    console.log(data);
    const getEducationTypes = data && data.educationTypes;
    const refinedEducTypes =
      getEducationTypes && removeTypename(getEducationTypes);
    setState(refinedEducTypes);
  };

  useEffect(() => {
    loadEducTypeData();
  }, []);
  console.log(state);

  const getEducTypeOptions =
    state &&
    state.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  const [createSubject, { loading, error }] = useMutation(
    createNewSubjectMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSubject({
          variables: {
            ...values,
            educType: state && getObjectFromID(values.educType),
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Nouvelle matière créée avec success",
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
                        Nouvelle matière
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.centerAll}>
                    <Field
                      name="educType"
                      component={Select}
                      type="text"
                      fullWidth
                      label="Type d'enseignement"
                      variant="outlined"
                      options={getEducTypeOptions}
                      disabled={isSubmitting || loading}
                      helpertext={<ErrorMessage name="educType" />}
                    />
                    <Field
                      name="subjectName"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Libellé matière"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                      helpertext={<ErrorMessage name="subjectName" />}
                    />
                    <Field
                      name="subjectCode"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Code matière"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                      helpertext={<ErrorMessage name="subjectCode" />}
                    />
                    <Field
                      helpertext={<ErrorMessage name="subjectType" />}
                      required
                      name="subjectType"
                      component={FRadioGroup}
                      variant="outlined"
                      label="Type Matière"
                      disabled={isSubmitting || loading}
                      options={[
                        { value: "O", label: "Obligatoire" },
                        { value: "F", label: "Facultative" },
                      ]}
                      groupProps={{ row: true }}
                    />
                    <Field
                      helpertext={<ErrorMessage name="subjectGroup" />}
                      required
                      name="subjectGroup"
                      component={FRadioGroup}
                      variant="outlined"
                      label="Groupe EPF"
                      disabled={isSubmitting || loading}
                      options={[
                        { value: "G3", label: "Aucun" },
                        { value: "EPF1", label: "EPF1" },
                        { value: "EPF2", label: "EPF2" },
                      ]}
                      groupProps={{ row: true }}
                    />
                    <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {(isSubmitting || loading) && <CircularProgress />}
                      {isSubmitting || loading
                        ? "Matière en création"
                        : "Crée matière"}
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
export default NewSubject;
