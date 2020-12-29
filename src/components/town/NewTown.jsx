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
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import {
  getDivisionsOfARegionQuery,
  getSubDivisionsOfADivisionQuery,
  getAllRegionsQuery,
} from "../queries&Mutations&Functions/Queries";
import Notification from "../utils/Notification";

import { getObjectFromID } from "../queries&Mutations&Functions/Functions";
import useForm from "../utils/useForm";
import { createTownMutation } from "../queries&Mutations&Functions/Mutations";

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
    borderRadius: "0.8rem",
    borderBottom: "0.4rem solid #c89666",
    borderTop: "0.4rem solid #829079",
    // backgroundColor: "#c89666",
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
  subDivision: Yup.string().required("Choissisez un arrondissement"),
  townName: Yup.string().required("Nom Ville Obligatoire"),
  townCode: Yup.string().required("Code Ville Obligatoire"),
});

const NewTown = () => {
  const classes = useStyles();
  const client = useApolloClient();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [state, setState, handleSelectChange] = useForm({
    regionID: "",
    divisionID: "",
    regions: [],
    divisions: [],
    subDivisions: [],
    loadingDiv: false,
  });
  const {
    regions,
    divisions,
    loadingDiv,
    subDivisions,
    regionID,
    divisionID,
  } = state;

  const initialValues = {
    townName: "",
    townCode: "",
    subDivision: "",
  };

  const loadRegionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsQuery,
    });
    console.log(data.regions);
    setState((state) => ({ ...state, regions: data.regions }));
  };

  useEffect(() => {
    loadRegionData();
  }, []);
  console.log({ regionID });
  // const refinedRegion = removeTypename(regions)
  const getRegionsOptions =
    regions && regions.map((item) => ({ value: item.id, label: item.regName }));

  const loadDivisionData = async () => {
    setState((prev) => ({
      ...prev,
      loadingDiv: true,
    }));

    const { error, data } = await client.query({
      skip: regionID && !regionID,
      query: getDivisionsOfARegionQuery,
      variables: { id: regionID },
    });

    console.dir(data);
    const { division } = { ...data.region };
    console.log(division);
    setState((state) => ({ ...state, divisions: division }));
    setState((prev) => ({
      ...prev,
      loadingDiv: false,
    }));
  };

  useEffect(() => {
    loadDivisionData();
  }, [regionID]);

  const getDivisionsOptions =
    divisions &&
    divisions.map((item) => ({ value: item.id, label: item.divName }));

  console.dir(divisions);

  const loadSubDivisionData = async () => {
    const { error, data } = await client.query({
      skip: divisionID && !divisionID,
      query: getSubDivisionsOfADivisionQuery,
      variables: { id: divisionID },
    });

    console.dir(data);
    const { subDivision } = { ...data.division };
    console.log(subDivision);
    setState((state) => ({ ...state, subDivisions: subDivision }));
  };

  useEffect(() => {
    loadSubDivisionData();
  }, [divisionID]);

  const getSubDivOptions =
    subDivisions &&
    subDivisions.map((item) => ({ value: item.id, label: item.subDivName }));

  console.dir(getSubDivOptions);
  const [createTown, { loadingMut, error }] = useMutation(
    createTownMutation,
    {}
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createTown({
          variables: {
            ...values,
            subDiv: values.subDivision && getObjectFromID(values.subDivision),
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Nouvelle Ville créée avec success",
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
            <Paper className={classes.pageStyled} elevation={13}>
              <Form aria-busy={isSubmitting}>
                {(isSubmitting || loadingMut) && <LinearProgress />}
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
                        Nouvelle Ville
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item className={classes.centerAll}>
                      <Field
                        variant="outlined"
                        name="regionID"
                        label="La Région"
                        onChange={(event) => {
                          handleSelectChange(event, "regionID");
                        }}
                        component={Select}
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="regionID" />}
                        options={getRegionsOptions}
                        fullWidth
                      />
                      <Field
                        variant="outlined"
                        onChange={(event) => {
                          handleSelectChange(event, "divisionID");
                        }}
                        name="divisionID"
                        label="Le Département"
                        component={Select}
                        placeholder="le Département"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="divisionID" />}
                        options={getDivisionsOptions}
                        fullWidth
                      />
                      <Field
                        variant="outlined"
                        name="subDivision"
                        label="L'Arrondissement"
                        component={Select}
                        placeholder="l'Arrondissement"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="subDivision" />}
                        options={getSubDivOptions}
                        fullWidth
                      />

                      <Field
                        name="townName"
                        type="text"
                        component={TextField}
                        label="Nom  de la Ville"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loadingMut}
                        helpertext={<ErrorMessage name="townName" />}
                      />
                      <Field
                        name="townCode"
                        type="text"
                        component={TextField}
                        label="Code de la Ville"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loadingMut}
                        helpertext={<ErrorMessage name="townCode" />}
                      />
                      <Notification notify={notify} setNotify={setNotify} />

                      <Button disabled={isSubmitting} onClick={submitForm}>
                        {(isSubmitting || loadingMut) && <CircularProgress />}
                        {isSubmitting ? "Nouvelle Ville en création" : "Créer Nouvelle Ville"}
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
export default NewTown;
