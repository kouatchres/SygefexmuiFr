import { makeStyles } from "@material-ui/core/Styles";
import React, { useState, useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import * as Yup from "yup";
import useForm from "../utils/useForm";
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { ErrorMessage, Formik, Form, Field } from "formik";
import {
  singleSubDivisionQuery,
  getAllRegionsDivisionsAndTownsQuery,
} from "../queries&Mutations&Functions/Queries";
import { updateSubDivisionMutation } from "../queries&Mutations&Functions/Mutations";
import { TextField } from "material-ui-formik-components/TextField";

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
  subDivName: Yup.string().required("Nom Arrondissement Obligatoire"),
  subDivCode: Yup.string().required("Code Arrondissement Obligatoire"),
});
const UpdateRegion = ({ id }) => {
  const classes = useStyles();
  const [state, setState] = useForm({ subDivCode: "", subDivName: "" });
  const client = useApolloClient();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  console.log(id);

  const loadSubDivData = async () => {
    const { data, loading } = await client.query({
      query: singleSubDivisionQuery,
      variables: { id },
      // pollInterval: 500,
    });
    console.log(data);
    const { subDivName, subDivCode } = { ...data.subDivision };
    setState({
      subDivName: subDivName,
      subDivCode: subDivCode,
    });
  };

  const initialValues = {
    subDivName: "",
    subDivCode: "",
  };

  useEffect(() => {
    loadSubDivData();
  }, []);
  console.log(state);

  const [updateSubDivision] = useMutation(updateSubDivisionMutation, {
    variables: { id },
  });

  return (
    <Formik
      initialValues={state || initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateSubDivision({
          variables: { ...values },
          refetchQueries: [{query: getAllRegionsDivisionsAndTownsQuery }],
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Arrondissement modifié avec success",
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
                {isSubmitting && <LinearProgress />}
                <Grid className={classes.centerAll} container>
                  <Grid container className={classes.centerAll}>
                    <Grid item>
                      <Typography
                        className={classes.titleStyled}
                        color="primary"
                        gutterBottom
                        variant="h5"
                        component="h6"
                      >
                        Modifier Arrondissement
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.centerAll}>
                    <Field
                      name="subDivName"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Libellé Arrondissement"
                      variant="outlined"
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="subDivName" />}
                    />
                    <Field
                      name="subDivCode"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Code Arrondissement"
                      variant="outlined"
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="subDivCode" />}
                    />
                    <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {isSubmitting && <CircularProgress />}
                      {isSubmitting
                        ? "Modification en cours"
                        : "Modifier Arrondissement"}
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
export default UpdateRegion;
