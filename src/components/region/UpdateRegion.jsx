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
import { TextField } from "material-ui-formik-components/TextField";
import { updateRegionMutation } from "../queries&Mutations&Functions/Mutations";
import { getSingleRegionQuery } from "../queries&Mutations&Functions/Queries";

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
  regName: Yup.string().required("Nom Région Obligatoire"),
  regCode: Yup.string().required("Code Région Obligatoire"),
});
const UpdateRegion = ({ id }) => {
  const classes = useStyles();
  const [state, setState] = useForm({ regCode: "", regName: "" });
  const client = useApolloClient();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  console.log(id);

  const loadRegionData = async () => {
    const { data, loading } = await client.query({
      query: getSingleRegionQuery,
      variables: { id },
      // pollInterval: 500,
    });
   
    const getRegionData = data.region;
    const { regName, regCode } = getRegionData;
    setState({
      regName: regName,
      regCode: regCode,
    });
  };

  const initialValues = {
    regName: "",
    regCode: "",
  };

  useEffect(() => {
    loadRegionData();
  }, []);
  console.log(state);

  const [updateRegion] = useMutation(updateRegionMutation, {
    variables: { id },
  });

  return (
    <Formik
      initialValues={state || initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateRegion({ variables: { ...values } });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Région modifiée avec success",
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
                        Modifier Région
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
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="regName" />}
                    />
                    <Field
                      name="regCode"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Code Région"
                      variant="outlined"
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="regCode" />}
                    />
                    <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {isSubmitting && <CircularProgress />}
                      {isSubmitting
                        ? "Modification en cours"
                        : "Modifie Région"}
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
