import React, { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { format } from "date-fns";
import ResultDetails from "./ResultDetails";
import { getCandidateResultsQuery } from "../../queries&Mutations&Functions/Queries";
import { Formik, Form } from "formik";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  roundFloatNumber,
  calcCandTotalScore,
  calcCandTotalCoeff,
  calcCandAve,
} from "../../queries&Mutations&Functions/Functions";

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
    maxWidth: "70%",
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
    // marginTop: "0.4rem",
    // marginBottom: "0.4rem",
    maxWidth: "75%",
    height: "auto",
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
    // backgroundColor: "#f0f0f0",
  },

  resultsTitle: {
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    backgroundColor: "#829079",
    height: "2.5rem",
    color: "#ede6b9",
    marginTop: "0.5rem",
  },

  totals: {
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    backgroundColor: "#829079",
    // backgroundColor: "theme.palette.primary",
    color: "#ede6b9",
  },
}));

const CandDetailedResultsHook = ({ id }) => {
  const classes = useStyles();
  const [state, setState] = useState({ results: {} });
  const client = useApolloClient();

  const loadCenterRegistrationInfo = async () => {
    console.log(`running the difficult query: ${id}`);
    const { data } = await client.query({
      query: getCandidateResultsQuery,
      variables: { id },
    });
    console.log(data);
    const getAllCandResults = data.registration;
    console.log(getAllCandResults);
    // const { registration, center, examSession } = getCenterExamSession;
    // const { exam, session } = { ...examSession };

    setState((prev) => ({ ...prev, results: getAllCandResults }));
  };

  useEffect(() => {
    loadCenterRegistrationInfo();
  }, []);

  console.log(state.results);
  const {
    candidate,
    centerExamSessionSpecialty,
    candRegistrationNumber,
    scores,
  } = state.results;

  const { centerExamSession, specialty } = { ...centerExamSessionSpecialty };

  const { examSession, center } = { ...centerExamSession };
  const { exam, session } = { ...examSession };
  const { centerName } = { ...center };
  const { examName } = { ...exam };
  const { sessionName } = { ...session };
  const { specialtyName } = { ...specialty };

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
  } = { ...candidate };

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
        <div>
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
                        Releve de note du: {exam && examName}-
                        {session && sessionName}
                      </strong>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <div
                      style={{
                        display: "grid",
                        gridGap: "0.2rem",
                        placeItems: "center",
                      }}
                    >
                      <Typography
                        color="primary"
                        variant="body2"
                        noWrap={false}
                      >
                        <strong>Centre d'Examen:</strong>
                      </Typography>
                      <Typography
                        color="primary"
                        variant="body2"
                        noWrap={false}
                      >
                        {center && centerName}
                      </Typography>
                    </div>
                    <div
                      item
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridGap: "0.2rem",
                        placeItems: "center",
                      }}
                    >
                      <Typography
                        color="primary"
                        variant="body2"
                        noWrap={false}
                      >
                        <strong>Examen:</strong>
                        {exam && examName}
                      </Typography>
                      <Typography
                        color="primary"
                        variant="body2"
                        noWrap={false}
                      >
                        <strong>Session:</strong>
                        {session && sessionName}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridGap: "0.2rem",
                        placeItems: "center",
                      }}
                    >
                      <Typography color="primary" variant="body2">
                        <strong> Numero d'Inscription:</strong>
                      </Typography>
                      <Typography color="primary" variant="body2">
                        {candRegistrationNumber}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridGap: "0.2rem",
                        placeItems: "center",
                      }}
                    >
                      <Typography
                        color="primary"
                        variant="body2"
                        noWrap={false}
                      >
                        <strong>Specialization:</strong>
                      </Typography>
                      <Typography
                        color="primary"
                        variant="body2"
                        noWrap={false}
                      >
                        {specialty && specialtyName}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item className={classes.candData} xs={12} sm={7}>
                    <Typography color="primary" variant="body2">
                      <strong>Nom:</strong>
                      {candidate && cand1stName}
                    </Typography>
                    <Typography color="primary" variant="body2">
                      <strong>Prenom:</strong>

                      {candidate && cand2ndName}
                    </Typography>
                    <Typography color="primary" variant="body2">
                      <strong>Autres:</strong>

                      {candidate && cand3rdName}
                    </Typography>
                    <Typography color="primary" variant="body2">
                      <strong>Ne(e) le:</strong>

                      {format(candidate && dateOfBirth, "d MMMM, YYYY ")}
                    </Typography>
                    <Typography color="primary" variant="body2">
                      <strong>A:</strong>
                      {candidate && placeOfBirth}
                    </Typography>

                    <Typography color="primary" variant="body2">
                      <strong>Sexe:</strong>
                      {candidate && gender}
                    </Typography>

                    <Typography color="primary" variant="body2">
                      <strong>Email:</strong>
                      {candidate && email}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.picStyled} xs={12} sm={5}>
                    {
                      <img
                        className={classes.picStyled}
                        src={candidate && image}
                        alt={candidate && cand1stName}
                      />
                    }
                  </Grid>
                </Grid>
                <Grid container spacing={6} className={classes.resultsTitle}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body">
                      <strong>Matiere</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="body">
                      <strong>Moyenne</strong>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={1}
                    style={{ display: "grid", placeItems: "left" }}
                  >
                    <Typography variant="body">
                      <strong>Coeff</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="body">
                      <strong>Total</strong>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={12} className={classes.score}>
                    {scores &&
                      scores.map((item) => (
                        <ResultDetails key={item.id} score={item} />
                      ))}
                  </Grid>
                </Grid>
                <Grid container spacing={6} className={classes.totals}>
                  <Grid item sm={4} xs={12}>
                    <Typography variant="body2">
                      <strong>Moy:</strong>

                      <strong>
                        {scores && roundFloatNumber(calcCandAve(scores), 3)}
                      </strong>
                    </Typography>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Typography variant="body2">
                      <strong>Coeffs:</strong>

                      <strong>
                        {scores &&
                          roundFloatNumber(calcCandTotalCoeff(scores), 3)}
                      </strong>
                    </Typography>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Typography variant="body2">
                      <strong>Totaux:</strong>

                      <strong>
                        {scores &&
                          roundFloatNumber(calcCandTotalScore(scores), 3)}
                      </strong>
                    </Typography>
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

export default CandDetailedResultsHook;
