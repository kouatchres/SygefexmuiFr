import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

import { Formik, Form } from "formik";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient } from "@apollo/react-hooks";
import { getCandidateRegistrationInfoQuery } from "../queries&Mutations&Functions/Queries";

import useForm from "../utils/useForm";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",

    // fontSize: 100,
  },

  picStyled: {
    height: "auto",
    width: "70%",
    marginTop: "2rem",
    display: "grid",
    placeItems: "center",
    borderRadius: "0.5rem",
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
    padding: "1rem",
    maxWidth: "60%",
    minWidth: "15rem",
  },
  generalContainer: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gripGap: "1rem",
    marginTop: "1rem",
  },
  examInfo: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    padding: "1rem",
    backgroundColor: "#e0bfc4",
    borderRadius: "0.5rem",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    // minWidth: "30vw",
    // minWidth: "40%",
    // maxWidth: "100vw",
  },
});

const NewRegistrationReceipt = ({ id }) => {
  const classes = useStyles();
  const router = useRouter();
  const client = useApolloClient();

  const [state, setState] = useForm({});

  const loadRegistrationData = async () => {
    const { error, data } = await client.query({
      query: getCandidateRegistrationInfoQuery,
      variables: { id },
    });

    console.log(data);
    const { registration } = data;
    setState({ registration });
    return data;
  };

  useEffect(() => {
    loadRegistrationData();
  }, [id]);

  console.log(state.registration);
  const {
    aptitude,
    candidate,
    centerExamSessionSpecialty,
    createdAt,
    candRegistrationNumber,
  } = { ...state.registration };

  const { centerExamSession, specialty } = { ...centerExamSessionSpecialty };

  const { examSession, center } = { ...centerExamSession };
  const { exam, session } = { ...examSession };
  const { centerName } = { ...center };
  const { examName } = { ...exam };
  const { sessionName } = { ...session };
  const { specialtyName, specialtyCode } = { ...specialty };

  const {
    image,
    cand1stName,
    cand2ndName,
    cand3rdName,
    email,
    phoneNumb,
    gender,
    placeOfBirth,
    dateOfBirth,
    EPF1,
    EPF2,
  } = { ...candidate };

  const initialValues = {
    image: "",
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    email: "",
    gender: "",
    EPF1: "",
    EPF2: "",
    placeOfBirth: "",
    dateOfBirth: "",
  };

  return (
    <Formik initialValues={initialValues}>
      {({ submitForm, setFieldValue, isSubmitting }) => {
        return (
          <div className={classes.centerAll}>
            <Paper className={classes.pageStyled} elevation={13}>
              <Form aria-busy={isSubmitting}>
                {isSubmitting && <LinearProgress />}
                <Grid className={classes.centerAll} container>
                  <Grid container className={classes.centerAll}>
                    <Grid item>
                      <Typography
color="primary"
                        className={classes.titleStyled}
                        gutterBottom
                        variant="body1"
                        component="h2"
                      >
                        Recu d'Inscription aux examens
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item>
                      <Typography
                      
                        variant="body1"
                        className={classes.titleStyled}
                        component="h5"
                      >
                        <strong> Centre D'Examen: </strong>
                        {centerName}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid spacing={10} container>
                    <Grid container xs={12} sm={8}>
                      <Grid item xs={12}>
                        <Typography variant="body1" component="h5">
                          <strong> Examen: </strong> {examName}
                        </Typography>
                        <Typography variant="body1" component="h5">
                          <strong> Session: </strong>
                          {sessionName}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" component="h5">
                          <strong>Info Inscritption: </strong>
                          <hr />
                        </Typography>
                        <Typography variant="body1" component="h5">
                          <strong> Numero: </strong> {candRegistrationNumber}
                        </Typography>

                        <Typography variant="body1" component="h5">
                          <strong> Aptitude: </strong> {aptitude}
                        </Typography>
                        <Typography variant="body1" component="h5">
                          <strong> SERIE: </strong>
                          {specialtyCode} - {specialtyName}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Date : </strong>
                          {format(createdAt, " DD, MMM, YYYY ")}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid xs={12} sm={4} item>
                      {
                        <img
                          className={classes.picStyled}
                          src={image}
                          alt={cand1stName}
                        />
                      }
                    </Grid>
                  </Grid>
                  <hr />
                  <Grid spacing={10} container>
                    <Grid xs={12} sm={8} item>
                      <Typography variant="body1">
                        <strong>Nom:</strong>
                        {cand1stName}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Prenoms: </strong>
                        {cand2ndName}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Autres Noms:</strong>
                        {cand3rdName}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Email: </strong> {email}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Lieu:</strong> {placeOfBirth}
                      </Typography>
                    </Grid>

                    <Grid xs={12} sm={4} item>
                      <Typography variant="body1">
                        <strong>Date : </strong>
                        {format(dateOfBirth, " DD, MMM, YYYY ")}
                      </Typography>

                      <Typography variant="body1">
                        <strong>Tel: </strong> {phoneNumb}
                      </Typography>

                      <Typography variant="body1">
                        <strong>Sexe:</strong> {gender}
                      </Typography>

                      <Typography variant="body1">
                        <strong>EPF1:</strong>
                        {EPF1}
                      </Typography>
                      <Typography variant="body1">
                        <strong>EPF2:</strong>
                        {EPF2}
                      </Typography>
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
export default NewRegistrationReceipt;
