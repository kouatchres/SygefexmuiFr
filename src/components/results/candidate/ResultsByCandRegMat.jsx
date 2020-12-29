import React, { useState } from "react";
import Error from "../../ErrorMessage";
import debounce from "lodash.debounce";
import { ApolloConsumer } from "react-apollo";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Grid, Typography, Paper, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getRegistrationIDFromRegNumberQuery } from "../../queries&Mutations&Functions/Queries";
import { useRouter } from "next/router";
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
    minWidth: "30%",
    maxWidth: "30%",
    borderRadius: "0.8rem",
    borderBottom: "0.4rem solid #c89666",
    borderTop: "0.4rem solid #829079",
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
const ResultsByCandRegMat = () => {
  const router = useRouter();
  const { id } = router.query;
  const classes = useStyles();
  const [state, setState] = useState({ candID: "", loading: "false" });
  const initialValues = {};

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, loading: true }));
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState((prev) => ({ ...prev, [name]: val }));
  };

  const makeCandVariableObject = (candCodeValue) => {
    const storedCandidate = {
      candRegistrationNumber: `${candCodeValue}`,
    };
    return storedCandidate;
  };
  const onChange = debounce(async (e, client) => {
    console.log("seaching");
    const res = await client.query({
      query: getRegistrationIDFromRegNumberQuery,
      variables: { candRegistrationNumber: e.target.value },
    });
    console.log(res.data);
    const getCandNumber = { ...res.data.candidateRegistrationNumber };
    setState({
      candID: getCandNumber.id,
      loading: false,
    });
  }, 400);
  const { candID } = state;
  candID &&
    router.push({
      pathname: "/show/results/candResults",
      query: { id: candID },
    });
  console.log(state);
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

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
                {(isSubmitting || state.loading) && <LinearProgress />}
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
                        Resultat Individuel
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item className={classes.centerAll}>
                      <ApolloConsumer>
                        {(client) => (
                          <Field
                            name="candRegistrationNumber"
                            component={TextField}
                            type="text"
                            fullWidth
                            label="Matricule Candidat"
                            variant="outlined"
                            type="search"
                            placeholder="Matricule Candidat"
                            onChange={(e) => {
                              e.persist();
                              onChange(e, client);
                            }}
                          />
                        )}
                      </ApolloConsumer>
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

export default ResultsByCandRegMat;
