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
  singleDivisionQuery,
} from "../queries&Mutations&Functions/Queries";
import { updateDivisionMutation } from "../queries&Mutations&Functions/Mutations";
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
  divName: Yup.string().required("Nom département Obligatoire"),
  divCode: Yup.string().required("Code département Obligatoire"),
});
const UpdateRegion = ({ id }) => {
  const classes = useStyles();
  const [state, setState] = useForm({ divCode: "", divName: "" });
  const client = useApolloClient();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  console.log(id);

  const loadSubDivData = async () => {
    const { data, loading } = await client.query({
      query: singleDivisionQuery,
      variables: { id },
      // pollInterval: 500,
    });
    console.log(data);
    const { divName, divCode } = { ...data.division };
    setState({
      divName: divName,
      divCode: divCode,
    });
  };

  const initialValues = {
    divName: "",
    divCode: "",
  };

  useEffect(() => {
    loadSubDivData();
  }, []);
  console.log(state);

  const [updateDivision] = useMutation(updateDivisionMutation, {
    variables: { id },
  });

  return (
    <Formik
      initialValues={state || initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateDivision({
          variables: { ...values },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "département modifié avec success",
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
                        Modifier département
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.centerAll}>
                    <Field
                      name="divName"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Libellé département"
                      variant="outlined"
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="divName" />}
                    />
                    <Field
                      name="divCode"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Code département"
                      variant="outlined"
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="divCode" />}
                    />
                    <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {isSubmitting && <CircularProgress />}
                      {isSubmitting
                        ? "Modification en cours"
                        : "Modifier département"}
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
