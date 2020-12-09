import React, { useState, useEffect } from "react";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { ErrorMessage, Formik, Form, Field } from "formik";
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation, useApolloClient, useQuery } from "@apollo/react-hooks";
import {
  getDivisionsOfARegionQuery,
  getAllRegionsQuery,
  getAllSubDivisionsQuery,
} from "../queries&Mutations&Functions/Queries";
import Notification from "../utils/Notification";

import { getObjectFromID } from "../queries&Mutations&Functions/Functions";
import { createSubDivisionMutation } from "../queries&Mutations&Functions/Mutations";

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

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "30vw",
  },
});

const validationSchema = Yup.object().shape({
  division: Yup.string().required("Choissisez un département"),
  subDivName: Yup.string().required("Nom arrondissement Obligatoire"),
  subDivCode: Yup.string().required("Code arrondissement Obligatoire"),
});

const NewSubDivision = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [regions, setRegions] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [regionID, setRegionID] = useState("");

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const initialValues = {
    subDivName: "",
    subDivCode: "",
    division: "",
  };
  const handleRegionIDChange = (e) => {
    console.log(e.target);
    setRegionID(e.target.value);
  };
  const loadRegionData = async () => {
    const { error, data, loading } = await client.query({
      query: getAllRegionsQuery,
    });
    console.log(data.regions);

    setRegions(data.regions);
  };

  useEffect(() => {
    loadRegionData();
  }, []);
  console.log({ regionID });
  // const refinedRegion = removeTypename(regions)
  const getRegionsOptions =
    regions && regions.map((item) => ({ value: item.id, label: item.regName }));

  const loadDivisionData = async () => {
    const { error, data, loading } = await client.query({
      skip: regionID && !regionID,
      query: getDivisionsOfARegionQuery,
      variables: { id: regionID },
    });
    {
      loading && <CircularProgress />;
    }
    console.dir(data);
    const { division } = { ...data.region };
    console.log(division);
    setDivisions(division);
  };

  useEffect(() => {
    loadDivisionData();
  }, [regionID]);

  console.log(divisions);

  const getDivOptions =
    divisions &&
    divisions.map((item) => ({ value: item.id, label: item.divName }));

  console.dir(getDivOptions);

  const updateCache = (cache, { res }) => {
    // Fetch the subDivs from the cache
    const existingSubDivs = cache.readQuery({
      query: getAllSubDivisionsQuery,
    });
    // Add the new subDivs to the cache
    const insertedSubDiv = res.insert_todos.returning[0];
    cache.writeQuery({
      query: getAllSubDivisionsQuery,
      data: { subDivision: [insertedSubDiv, ...existingSubDivs.subDivision] },
    });
  };

  const [createSubDivision, { loading, error }] = useMutation(
    createSubDivisionMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSubDivision({
          variables: {
            ...values,
            division: values.division && getObjectFromID(values.division),
          },
          refetchQueries: [{ getAllSubDivisionsQuery }],
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          // updateCache(cache,res.data.)
          setNotify({
            isOpen: true,
            message: "Nouvel arrondissement créé avec success",
            type: "success",
          });
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
                        color="primary"
                        gutterBottom
                        variant="h5"
                        component="h6"
                      >
                        Nouvel Arrondissement
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item className={classes.centerAll}>
                      <Field
                        variant="outlined"
                        name="regionID"
                        label="La Région"
                        onChange={handleRegionIDChange}
                        component={Select}
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="regionID" />}
                        options={getRegionsOptions}
                        fullWidth
                      />
                      <Field
                        variant="outlined"
                        name="division"
                        label="Le Département"
                        component={Select}
                        placeholder="le Département"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="division" />}
                        options={getDivOptions}
                        fullWidth
                      />

                      <Field
                        name="subDivName"
                        type="text"
                        component={TextField}
                        label="Nom Arrondissement"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loading}
                        helpertext={<ErrorMessage name="subDivName" />}
                      />
                      <Field
                        name="subDivCode"
                        type="text"
                        component={TextField}
                        label="Code Arrondissement"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loading}
                        helpertext={<ErrorMessage name="subDivCode" />}
                      />
                      <Notification notify={notify} setNotify={setNotify} />

                      <Button disabled={isSubmitting} onClick={submitForm}>
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
export default NewSubDivision;
