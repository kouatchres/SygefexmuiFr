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
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";
import { getObjectFromID } from "../queries&Mutations&Functions/Functions";
import { createDivisionMutation } from "../queries&Mutations&Functions/Mutations";

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
    minWidth: "30vw",
  },
});

const validationSchema = Yup.object().shape({
  divName: Yup.string().required("Nom Département Obligatoire"),
  divCode: Yup.string().required("Code Département Obligatoire"),
  region: Yup.object().required("Région Obligatoire"),
});

const NewDivision = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [regions, setRegions] = useState([]);

  const initialValues = {
    divName: "",
    divCode: "",
    region: "",
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
  // const refinedRegion = removeTypename(regions)
  const getRegionsOptions =
    regions && regions.map((item) => ({ value: item, label: item.regName }));

  const [createDivision, { loading, error }] = useMutation(
    createDivisionMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createDivision({
          variables: {
            ...values,
            region: values.region && getObjectFromID(values.region.id),
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
            <Paper className={classes.pageStyled} elevation={20}>
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
                        Nouveau Département
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.centerAll}>
                    <Grid item className={classes.centerAll}>
                      <Field
                        component={Select}
                        autocomplete="off"
                        variant="outlined"
                        name="region"
                        label="La Région"
                        placeholder="la Région"
                        disabled={isSubmitting}
                        options={getRegionsOptions}
                        helperText={<ErrorMessage name="region" />}
                      />
                      <Field
                        component={TextField}
                        autocomplete="off"
                        name="divName"
                        type="text"
                        label="Nom Département"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loading}
                        helperText={<ErrorMessage name="divName" />}
                      />

                      <Field
                        component={TextField}
                        autocomplete="off"
                        name="divCode"
                        type="text"
                        label="Code Département"
                        fullWidth
                        variant="outlined"
                        disabled={isSubmitting || loading}
                        helperText={<ErrorMessage name="divCode" />}
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
export default NewDivision;

// <SygefexMuiSelect
// name="region"
// margin="normal"
// onChange={(value) =>
//   setFieldValue("region", value.target)
// }
// placeholder="la Région"
// disabled={isSubmitting}
// >
//   {regions &&
//     regions.map((item) => (
//       <MenuItem key={item.id} value={item.id}>
//         {item.regName}
//       </MenuItem>
//     ))}
// </Field>
