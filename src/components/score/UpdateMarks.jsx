import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { ErrorMessage, Formik, Form, Field } from "formik";
import useForm from "../utils/useForm";
import Notification from "../utils/Notification";

import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { updateScoreMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getObjectFromID,
  compareValues,
} from "../queries&Mutations&Functions/Functions";
import {
  registrationIDFromSecretCodeQuery,
  getAllSubjectSpecialtiesOfASpecialtyQuery,
} from "../queries&Mutations&Functions/Queries";

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
    maxWidth: "30%",
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
  // candExamSecretCode: Yup.string().required("Code Secret candidat Obligatoire"),

  subjectSpecialty: Yup.string().required("Choix de la matière Obligatoire"),
  subjectAve: Yup.number()
    .required("Note du candidat Obligatoire")
    .min(0, "Pas de note négative")
    .max(20, "Pas de note supérieure a 20"),
});

const UpdateMarks = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [state, setState, handleSelectChange] = useForm({
    specialty: {},
    subjectSpecialty: [],
    candExamSecretCode: "",
  });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const initialValues = {
    subjectAve: "",
    subjectSpecialty: "",
    candExamSecretCode: "",
  };
  const { specialty, subjectSpecialty, candExamSecretCode } = state;

  const loadSpecialtyData = async () => {
    const { error, data, loading } = await client.query({
      skip: !candExamSecretCode,
      query: registrationIDFromSecretCodeQuery,
      variables: {
        candExamSecretCode: candExamSecretCode && candExamSecretCode,
      },
    });
    const registrationID = data && data.getRegistration;
    const { specialty } = { ...registrationID };
    console.log(specialty);
    setState((prev) => ({ ...prev, specialty }));
  };

  useEffect(() => {
    loadSpecialtyData();
  }, [candExamSecretCode]);

  console.log(subjectSpecialty);

  const loadSubjectSpecialtyData = async () => {
    const { error, data: dataSubjSpecialty, loading } = await client.query({
      skip: !specialty,
      query: getAllSubjectSpecialtiesOfASpecialtyQuery,
      variables: {
        id: specialty && specialty.id,
      },
    });

    // console.log(dataSubjSpecialty);
    const getSubjSpecialty = dataSubjSpecialty && dataSubjSpecialty.specialty;
    const { subjectSpecialty } = {
      ...getSubjSpecialty,
    };

    const suspects =
      subjectSpecialty &&
      subjectSpecialty.map((item) => ({
        id: item.id,
        ...item.subject,
      }));
    console.log(suspects);
    // console.log(suspects);
    setState((prev) => ({ ...prev, subjectSpecialty: suspects }));
  };

  useEffect(() => {
    loadSubjectSpecialtyData();
  }, [specialty]);

  const sortedSuspects =
    subjectSpecialty && subjectSpecialty.sort(compareValues("subjectName"));

  const getSubjectsOptions =
    sortedSuspects &&
    sortedSuspects.map((item) => ({
      value: item.id,
      label: item.subjectName,
    }));

  const [updateScore, { loading, error }] = useMutation(updateScoreMutation);

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateScore({
          variables: {
            ...values,
            subjectSpecialty:
              subjectSpecialty && getObjectFromID(values.subjectSpecialty),
            candExamSecretCode: candExamSecretCode && candExamSecretCode,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Note enregistrée  avec success",
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
                        variant="body1"
                        component="h2"
                      >
                        Modifier notes
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item className={classes.centerAll}>
                      <Field
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        name="candExamSecretCode"
                        type="text"
                        value={candExamSecretCode || ""}
                        onChange={(event) => {
                          handleSelectChange(event, "candExamSecretCode");
                        }}
                        label="Anonymat du candidat"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="candExamSecretCode" />}
                      />
                      <Field
                        component={Select}
                        variant="outlined"
                        name="subjectSpecialty"
                        placeholder="matière"
                        label="Matières"
                        options={getSubjectsOptions}
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="subjectSpecialty" />}
                      />
                      <Field
                        component={Select}
                        variant="outlined"
                        name="subjectSpecialty"
                        placeholder="matière"
                        label="Matières"
                        options={getSubjectsOptions}
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="subjectSpecialty" />}
                      />
                      <Field
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        helpertext={<ErrorMessage name="subjectAve" />}
                        name="subjectAve"
                        type="number"
                        step="0.001"
                        label="Note en la matière"
                        disabled={isSubmitting}
                      />
                      <Notification notify={notify} setNotify={setNotify} />

                      <Button
                        disabled={isSubmitting || loading}
                        onClick={submitForm}
                      >
                        {(isSubmitting || loading) && <CircularProgress />}
                        {isSubmitting
                          ? "Enregistrement en cours"
                          : "Enregistrer Note"}
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
export default UpdateMarks;

// <SygefexMuiSelect
// name="region"
// margin="normal"
// onChange={(value) =>
//   setFieldValue("region", value.target)
// }
// placeholder="la Région"
// disabled={isSubmitting}
// >
//   {regions &&
//     regions.map((item) => (
//       <MenuItem key={item.id} value={item.id}>
//         {item.regName}
//       </MenuItem>
//     ))}
// </Field>
