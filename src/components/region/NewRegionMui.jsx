import React from "react";
import Error from "../ErrorMessage.js";
import { Formik, Form, Field } from "formik";
import { Button, Box, container, paper } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { createNewRegionMutation } from "../queries&Mutations&Functions/Mutations";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // fontSize: 100,
  },

  allControls: {
    display: "flex",
    flexDirection: "column",
  },
  pap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contain: {
    maxWidth: "20rem",
  },
});

const validationSchema = Yup.object().shape({
  regName: Yup.string().required("Nom Région Obligatoire"),
  regCode: Yup.string().required("Code Région Obligatoire"),
});
const NewRegionMui = () => {
  const MuiTheme = createMuiTheme({
    typography: {
      h4: {
        fontSize: 25,
      },
      fontSize: 20,
    },
    palette: {
      primary: {
        main: orange[500],

        // light: "#757ce8",
        // main2: "#3f50b5",
        // main: "#0780b7",
        // dark: "#002884",
        // contrastText: "#fff",
      },
      secondary: {
        main: orange[500],
        // light: "#ff7961",
        // dark: "#f44336",
        // main: "#ba000d",
        // contrastText: "#000",
      },
    },
  });

  const classes = useStyles();
  const initialValues = {
    regName: "",
    regCode: "",
  };

  const [createRegion, { loading, error }] = useMutation(
    createNewRegionMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createRegion({ variables: { ...values } });
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
          <div>
            <h4>Nouvelle Région</h4>
            <Error error={error} />
            <container maxWidth="sm">
              <Form>
                <container className={classes.contain}>
                  <paper className={classes.pap}>
                    <Box margin={0.5}>
                      <Field
                        component={TextField}
                        name="regName"
                        type="text"
                        label="Nom la Région"
                        disabled={isSubmitting}
                      />
                    </Box>
                    <Box margin={0.5}>
                      <Field
                        component={TextField}
                        name="regCode"
                        type="text"
                        label="Code la Région"
                        disabled={isSubmitting}
                      />
                    </Box>

                    <Box margin={0.5}>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                      >
                        Valid{isSubmitting ? "ation en cours" : "er"}
                      </Button>
                    </Box>
                  </paper>
                </container>
              </Form>
            </container>
          </div>
        );
      }}
    </Formik>
  );
};
export default NewRegionMui;
