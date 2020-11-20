import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, MenuItem, Grid } from "@material-ui/core";
import { TextField } from "formik-material-ui";

const ranges = [
  { value: "1", label: "Oranges" },
  { value: "2", label: "Mangoes" },
  { value: "3", label: "Grapes" },
  { value: "4", label: "Vines" },
  { value: "5", label: "Tangerines" },
  { value: "6", label: "Cacoa" },
  { value: "7", label: "Coffee" },
  { value: "8", label: "Sugar Cane" },
  { value: "9", label: "Pine Apples" },
  { value: "10", label: "Cucumba" },
  { value: "12", label: "Apples" },
];
const App = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          {isSubmitting && <LinearProgress />}
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
              <br />
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                type="text"
                name="select"
                label="With Select"
                select
                variant="standard"
                helperText="Please select Range"
                margin="normal"
                // InputLabelProps={{
                //   shrink: true,
                // }}
              >
                {ranges.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>

              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
export default App;
