import React from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SygefexMuiInput from "../muiComponents/controls/SygefexMuiInput";
import { useMutation } from "@apollo/react-hooks";
import { createNewRankMutation } from "../queries&Mutations&Functions/Mutations";

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
    minWidth: "30",
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
    minWidth: "30",
  },
});

const validationSchema = Yup.object().shape({
  rankName: Yup.string().required("Nom poste Obligatoire"),
  rankCode: Yup.string().required("Code poste Obligatoire"),
});

const NewRank = () => {
  const classes = useStyles();

  const initialValues = {
    rankName: "",
    rankCode: "",
  };

  const [createRank, { loading, error }] = useMutation(createNewRankMutation);

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createRank({
          variables: {
            ...values,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
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
                        variant="body1"
                      >
                        Nouveau Poste
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item className={classes.centerAll}>
                      <SygefexMuiInput
                        autocomplete="off"
                        name="rankName"
                        type="text"
                        label="Nom Poste"
                        fullWidth
                        variant="standard"
                        disabled={isSubmitting || loading}
                        helperText={<ErrorMessage name="rankName" />}
                      />

                      <SygefexMuiInput
                        autocomplete="off"
                        name="rankCode"
                        type="text"
                        label="Code Poste"
                        fullWidth
                        variant="standard"
                        disabled={isSubmitting || loading}
                        helperText={<ErrorMessage name="rankCode" />}
                      />

                      <Button
                        disabled={isSubmitting || loading}
                        onClick={submitForm}
                      >
                        {(isSubmitting || loading) && <CircularProgress />}
                        Valid{isSubmitting ? "ation en cours" : "er"}
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
export default NewRank;
