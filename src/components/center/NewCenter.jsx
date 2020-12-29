import React, { useState,useEffect } from "react";
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
  getTownsOfASubDivisionQuery,
} from "../queries&Mutations&Functions/Queries";
import Notification from "../utils/Notification";

import { getObjectFromID } from "../queries&Mutations&Functions/Functions";
import useForm from "../utils/useForm";
import { createCenterMutation } from "../queries&Mutations&Functions/Mutations";

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
    padding: "1rem",
    minWidth: "15rem",
    maxWidth: "30%",
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
  centerName: Yup.string().required("Nom du Centre Obligatoire"),
  town: Yup.string().required("Centre Obligatoire"),
  centerCode: Yup.string().required("Code centre Obligatoire"),
  centerNumber: Yup.number()
    .min(1, "Numéro centre du doit etre Positif")
    .required("Numéro centre Obligatoire"),
});

const NewCenter = () => {
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
    subDivisionID: "",
    regions: [],
    divisions: [],
    subDivisions: [],
    towns: [],
  });
  const {
    regions,
    subDivisionID,
    divisions,
    subDivisions,
    regionID,
    divisionID,
    towns,
  } = state;

  const initialValues = {
    centerName: "",
    centerCode: "",
    centerNumber: "",
    town: "",
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
   
    const { error, data } = await client.query({
      skip: regionID && !regionID,
      query: getDivisionsOfARegionQuery,
      variables: { id: regionID },
    });

    console.dir(data);
    const { division } = { ...data.region };
    console.log(division);
    setState((state) => ({ ...state, divisions: division }));
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

  const loadTownData = async () => {
    const { error, data } = await client.query({
      skip: subDivisionID && !subDivisionID,
      query: getTownsOfASubDivisionQuery,
      variables: { id: subDivisionID },
    });

    console.dir(data);
    const { town } = { ...data.subDivision };
    console.log(town);
    setState((state) => ({ ...state, towns: town }));
  };

  useEffect(() => {
    loadTownData();
  }, [subDivisionID]);
  console.dir(towns);
  const getTownOptions =
    towns && towns.map((item) => ({ value: item.id, label: item.townName }));

  console.dir(getTownOptions);
  const [createCenter, { loadingMut, error }] = useMutation(
    createCenterMutation,
    {}
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createCenter({
          variables: {
            ...values,
            town: values.town && getObjectFromID(values.town),
          },
        });
         setNotify({
           isOpen: true,
           message: "Centre Supprimé avec success",
           type: "error",
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
                        Nouveau Centre
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
                        onChange={(event) => {
                          handleSelectChange(event, "subDivisionID");
                        }}
                        label="L'Arrondissement"
                        component={Select}
                        placeholder="l'Arrondissement"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="subDivision" />}
                        options={getSubDivOptions}
                        fullWidth
                      />
                      <Field
                        variant="outlined"
                        name="town"
                        label="La Centre"
                        component={Select}
                        placeholder="la Centre"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="town" />}
                        options={getTownOptions}
                        fullWidth
                      />

                      <Field
                        name="centerName"
                        type="text"
                        component={TextField}
                        label="Libéllé du Centre"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loadingMut}
                        helpertext={<ErrorMessage name="centerName" />}
                      />
                      <Field
                        name="centerCode"
                        type="text"
                        component={TextField}
                        label="Libéllé du Centre"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loadingMut}
                        helpertext={<ErrorMessage name="centerCode" />}
                      />
                      <Field
                        name="centerNumber"
                        type="text"
                        component={TextField}
                        label="Numéro de Centre"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loadingMut}
                        helpertext={<ErrorMessage name="centerNumber" />}
                      />
                      <Notification notify={notify} setNotify={setNotify} />

                      <Button disabled={isSubmitting} onClick={submitForm}>
                        {(isSubmitting || loadingMut) && <CircularProgress />}
                        {isSubmitting ? "Création en cours" : "Crée Centre"}
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
export default NewCenter;
//  <SygefexMuiSelect
//    variant="standard"
//    name="division"
//    label="Le Département"
//    placeholder="Le Département"
//    disabled={isSubmitting}
//    options={getSubDivOptions}
//    helpertext={<ErrorMessage name="division" />}
//  />;
// //

// <SygefexMuiSelect
//   variant="standard"
//   name="division"
//   label="Le Département"
//   placeholder="Le Département"
//   disabled={isSubmitting}
//   options={getSubDivOptions}
//   helpertext={<ErrorMessage name="division" />}
// />

// <SygefexMuiSelect
//   variant="standard"
//   name="division"
//   label="Le Département"
//   placeholder="Le Département"
//   disabled={isSubmitting}
//   helpertext={<ErrorMessage name="division" />}
// >
//   {division &&
//     division.map((item) => (
//       <MenuItem value={item.id} key={item.id}>
//         {item.divName}
//       </MenuItem>
//     ))}
// </SygefexMuiSelect>

// <Field
//   component={TextField}
//   select
//   name="regionD"
//   disabled={isSubmitting}
//   helpertext="region"
// >
//   {regions &&
//     regions.map((item) => (
//       <MenuItem key={item.id} value={item.id}>
//         {item.regName}
//       </MenuItem>
//     ))}
// </Field>;

// <Field
//   variant="standard"
//   disabled={isSubmitting}
//   fullWidth
//   placeholder="Le Département"
//   name="division"
//   label="Département"
//   options={getSubDivOptions}
//   component={Select}
//   helpertext={<ErrorMessage name="region" />}
// />
