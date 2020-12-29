import React, { useState, useEffect } from "react";
import useForm from "../utils/useForm";
import { format } from "date-fns";
import { Formik, Form } from "formik";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient } from "@apollo/react-hooks";
import UpdatePopup from "../utils/UpdatePopup";
import NewUpdateCandidate from "./NewUpdateCandidate";

import { singleCandidateQuery } from "../queries&Mutations&Functions/Queries";

const useStyles = makeStyles({
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
    minWidth: "25rem",
    maxWidth: "40%",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  partTwo: {
    display: "grid",
    gridTemplateRows: "1fr 1fr ",
  },

  picStyled: {
    // paddingLeft: "1rem",
    maxWidth: "70%",
    height: "auto",
    display: "grid",
    placeItems: "center",
    borderRadius: "0.5rem",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "50%",
  },
});

const SingleCandidateHooks = ({ id }) => {
  const client = useApolloClient();
  const classes = useStyles();
  const [state, setState] = useForm({});
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: "",
  });

  const loadCandData = async () => {
    const { error, data } = await client.query({
      query: singleCandidateQuery,
      variables: { id: id },
    });
    console.log(data);
    const { candidate } = data;
    setState({ candidate });
  };
  useEffect(() => {
    loadCandData();
  }, []);

  const callUpdatePopup = (event) => {
    setUpdatePopupState((prev) => ({ ...prev, isOpen: true }));
  };

  const handleUpdatePopupClose = () => {
    setUpdatePopupState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };
  console.log(state.candidate);

  const {
    momName,
    dadName,
    candCode,
    image,
    cand1stName,
    cand2ndName,
    cand3rdName,
    email,
    gender,
    phoneNumb,
    placeOfBirth,
    dateOfBirth,
    birthCertNumber,
  } = { ...state.candidate };
  const initialValues = {
    momName: "",
    dadName: "",
    candCode: "",
    image: "",
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    email: "",
    phoneNumb: "",
    gender: "",
    placeOfBirth: "",
    dateOfBirth: "",
    birthCertNumber: "",
  };
  return (
    <Formik initialValues={initialValues}>
      {({ values, isSubmitting }) => (
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
                      variant="h5"
                      component="h6"
                    >
                      Recu Candidat
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                    <Typography color="primary" variant="body1">
                      <strong>Nom:</strong> <span>{cand1stName}</span>
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Prenoms: </strong>
                      <span> {cand2ndName}</span>
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Autres Noms:</strong>
                      <span> {cand3rdName}</span>
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Naissance:</strong>
                      <hr />
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Sexe:</strong> <span>{gender}</span>
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Date : </strong>
                      <span>{format(dateOfBirth, " DD, MMM, YYYY ")}</span>
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Lieu:</strong> <span>{placeOfBirth}</span>
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Nom des parents:</strong>
                      <hr />
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Père:</strong>
                      <span> {dadName}</span>
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Mère:</strong>
                      <span> {momName}</span>
                    </Typography>
                    <hr />
                    <Typography color="primary" variant="body1">
                      <strong>Email:</strong>
                      <span> {email}</span>
                    </Typography>

                    <Typography color="primary" variant="body1">
                      <strong>Code:</strong> <span> {candCode}</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography color="primary" variant="body1">
                      <strong>Acte Naissance:</strong>
                      <hr />
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>No:</strong>
                      <span> {birthCertNumber}</span>
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Tel: </strong> <span>{phoneNumb}</span>
                    </Typography>

                    <Grid item xs={12} sm={6} className={classes.picStyled}>
                      {
                        <img
                          className={classes.picStyled}
                          src={image}
                          alt={cand1stName}
                        />
                      }
                      <Button onClick={callUpdatePopup}>Modifier</Button>
                    </Grid>
                  </Grid>
                  <UpdatePopup
                    isOpen={updatePopupState.isOpen}
                    onClose={handleUpdatePopupClose}
                  >
                    <NewUpdateCandidate id={id} />
                  </UpdatePopup>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        </div>
      )}
    </Formik>
  );
};

export default SingleCandidateHooks;
