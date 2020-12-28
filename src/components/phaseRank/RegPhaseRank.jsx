import React,{useState, useEffect} from "react";
import Error from "../ErrorMessage.js";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Select } from "material-ui-formik-components/Select";
import {useApolloClient, useMutation} from "@apollo/react-hooks"

import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import {
  getObjectFromID,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";

import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Notification from "../utils/Notification";
import { createPhaseRankMutation } from "../queries&Mutations&Functions/Mutations";
import { getAllPhasesQuery,getAllRanksQuery   } from "../queries&Mutations&Functions/Queries";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // fontSize: 100,
  },
  
  pageStyled: {
    display: "grid",
    placeItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    minWidth: "50%",
  },
  
  titleStyled: {
    display: "grid",
    placeItems: "center",
  },
  
  centerAll: {
    minWidth: "40%",
    display: "grid",
    placeItems: "center",
  },
});

const validationSchema = Yup.object().shape({
  });

const RegPhaseRank = () => {

  const client = useApolloClient()
  const classes = useStyles();
  const initialValues = {
    phase: "",
    rank: "",
  };

const [state, setState]= useState({phases:[], ranks:[]})
  
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  
const loadPhasesData=async()=>{
  const {data}=await client.query({
    query:getAllPhasesQuery,
  })

  const allPhases = data && data.phases;
  console.log(allPhases);
  const refinedPhase = allPhases && removeTypename(allPhases);
  setState((prev)=>({...prev, phases:refinedPhase}))
}

  const getPhasesOptions =
    state.phases &&
    state.phases.map((item) => ({
      value: item.id,
      label: item.phaseName,
    }));
useEffect(()=>{
loadPhasesData()
}, [])



const loadRanksData=async()=>{
  const {data}=await client.query({
    query:getAllRanksQuery,
  })
const AllRanks = data && data.ranks;
  const refinedRank = AllRanks && removeTypename(AllRanks);
  setState((prev)=>({...prev, ranks:refinedRank}))
}

  const getRanksOptions =
    state.ranks &&
    state.ranks.map((item) => ({
      value: item.id,
      label: item.rankName,
    }));


useEffect(()=>{
loadRanksData()
}, [])


console.log(getObjectFromID(state.phase))
  const [createPhaseRank, { loading, error }] = useMutation(
    createPhaseRankMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
         const res = await createPhaseRank({
          variables: {
            ...values,
            phase: state.phases && getObjectFromID(values.phase),
            rank: state.ranks && getObjectFromID(values.rank),
          },
        });

 setNotify({
            isOpen: true,
            message: "Opération réussie",
            type: "success",
          });

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
                {(isSubmitting || loading) && <LinearProgress />}
                <Grid className={classes.centerAll} container>
                  <Grid container className={classes.centerAll}>
                    <Grid item>
                      <Typography
                        className={classes.titleStyled}
                        color="primary"
                        gutterBottom
                        variant="body2"
                        component="h2"
                      >
                       Postes des Phases de l'Examen
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.centerAll}>
                    <Field
                      name="phase"
                      component={Select}
                      type="text"
                      fullWidth
                      label="Phase de l'examen"
                      variant="outlined"
                        options={getPhasesOptions}
                      disabled={isSubmitting || loading}
                      helpertext={<ErrorMessage name="phase" />}
                    />
                    <Field
                      name="rank"
                      component={Select}
                      type="text"
                      fullWidth
                      label="Rang"
                      variant="outlined"
                      disabled={isSubmitting || loading}
                        options={getRanksOptions}

                      helpertext={<ErrorMessage name="rank" />}
                    />
                <Notification notify={notify} setNotify={setNotify} />

                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {(isSubmitting || loading) && <CircularProgress />}
                      {isSubmitting || loading
                        ? "validation en cours"
                        : "Valide Phase"}
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
export default RegPhaseRank;
