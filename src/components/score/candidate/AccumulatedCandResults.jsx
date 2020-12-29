import React, { useState,useEffect } from "react";
import { Formik, Form } from "formik";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { format } from "date-fns";
import RegistrationDetails from "./RegistrationDetails";
import { getAllCandidateRegistrationIDsQuery } from "../../queries&Mutations&Functions/Queries";
import { useApolloClient } from "@apollo/react-hooks";


const useStyles = makeStyles((theme) => ({
  theme,
  divStyled: {
    display: "grid",
    placeItems: "center",
    top: "2rem",
    height: "90vh",
  },
  pageStyled: {
    display: "grid",
    placeItems: "center",
    // marginTop: "2rem",
    padding: "1rem",
    maxWidth: "65%",
    // minWidth: "65%",
    borderRadius: "0.8rem",
    borderBottom: "0.4rem solid #c89666",
    borderTop: "0.4rem solid #829079",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },
  MuiFormControl: {
    root: {
      margin: "0rem",
    },
  },

  picStyled: {
    height: "7rem",
    maxWidth: "auto",
    display: "grid",
    placeItems: "center",
    borderRadius: "0.5rem",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "40%",
  },
  candData: {
    display: "grid",
    placeItems: "left",
  },

  generalHeading: {
    display: "grid",
    placeItems: "center",
    // width: "100%",
  },

  score: {
    backgroundColor: "#ede6b9",
    borderLeft:"0.07rem solid #829079",
    borderRight:"0.07rem solid #829079",
    // backgroundColor: "#f0f0f0",
  },

  resultsTitle: {
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    backgroundColor: "#829079",
    height: "1.9rem",
    color: "#ede6b9",
    marginTop: "0.5rem",
    alignItems:"center",
    paddingLeft:"0.3rem",
  },

  totals: {
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    backgroundColor: "#829079",
    // backgroundColor: "theme.palette.primary",
    color: "#ede6b9",
  },
}));

const AccumulatedCandResults = ({ id }) => {
  const classes= useStyles()
  const [state, setState] = useState({});
  const client = useApolloClient();

  const loadCandResultsData = async () => {
    const { error, data } = await client.query({
      query: getAllCandidateRegistrationIDsQuery,
      variables: { id },
    });
    // console.log(data);
    setState(data.candidate);
  };

  useEffect(() => {
    loadCandResultsData();
  }, []);

  const {
    image,
    cand1stName,
    cand2ndName,
    cand3rdName,
    email,
    placeOfBirth,
    dateOfBirth,
    dadName,
    momName,
    gender,
    registration,
  } = state

  const initialValues = {
    candCode: "",
    image: "",
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    email: "",
    gender: "",
    placeOfBirth: "",
    dateOfBirth: "",
    candExamSecretCode: "",
  };

  return (
    <Formik method="GET" initialValues={initialValues}>
      {({ isSubmitting }) => (
        <div className={classes.centerAll}>
          <Paper className={classes.pageStyled} elevation={13}>
            <Form aria-busy={isSubmitting}>
              <Grid className={classes.centerAll} container>
                <Grid container className={classes.centerAll}>
                  <Grid item>
                    <Typography
                      className={classes.titleStyled}
                      color="primary"
                      gutterBottom
                      variant="body1"
                      component="h6"
                    >
                      <strong>
                        Les Resultats de:{cand1stName} {cand2ndName}{" "}
                        {cand3rdName}
                      </strong>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item className={classes.candData} xs={12} sm={4}>
                    <Typography color="primary" variant="body2">
                      <strong>Nom:</strong>
                      {cand1stName}
                    </Typography>
                    <Typography color="primary" variant="body2">
                      <strong>Prenom:</strong>

                      {cand2ndName}
                    </Typography>
                    <Typography color="primary" variant="body2">
                      <strong>Autres:</strong>

                      {cand3rdName}
                    </Typography>
                    <Typography color="primary" variant="body2">
                      <strong>Ne(e) le:</strong>

                      {format(dateOfBirth, "d MMM YYYY ")}
                    </Typography>
                     <Typography color="primary" variant="body2">
                      <strong>A:</strong>
                      {placeOfBirth}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.candData} xs={12} sm={4}>
                   
                    <Typography color="primary" variant="body2">
                      <strong>Sexe:</strong>
                      {gender}
                    </Typography>
                    <Typography color="primary" variant="body2">
                      <strong>Email:</strong>
                      {email}
                    </Typography>

                    <Typography color="primary" variant="body2">
                      <strong>Nom Pere:</strong>
                      {dadName}
                    </Typography>

                    <Typography color="primary" variant="body2">
                      <strong>Nom mere:</strong>
                      {momName}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.picStyled} xs={12} sm={4}>
                    {
                      <img
                        className={classes.picStyled}
                        src={image}
                        alt={cand1stName}
                      />
                    }
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.resultsTitle}>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="body">
                      <strong>No Centre</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body">
                      <strong>Nom Centre</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <Typography variant="body">
                      <strong>Session</strong>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={2}
                    style={{ display: "grid", placeItems: "left" }}
                  >
                    <Typography variant="body">
                      <strong>Examen</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <Typography variant="body">
                      <strong>Resultats</strong>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} className={classes.score}>
                    {registration &&
                      registration.map((item) => (
                        <RegistrationDetails
                          key={item.id}
                          registrationInfo={item}
                        />
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        </div>
      )}
    </Formik>
  );
};

export default AccumulatedCandResults;
