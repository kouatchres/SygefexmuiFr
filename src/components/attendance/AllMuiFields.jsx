import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { Autocomplete } from "material-ui-formik-components/Autocomplete";
import countries from "./data/countries.json";

class RegistrationForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: "",
            gender: "Female",
            country: null,
          }}
          onSubmit={(values) => {
            alert(
              `Username: ${values.username}\nGender: ${values.gender}\nCountry: ${values.country.label}`
            );
          }}
        >
          <Form>
            <Field name="username" label="Username" component={TextField} />
            <Field
              name="gender"
              label="Gender"
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" },
              ]}
              component={Select}
            />
            <Field
              name="fruits"
              label="Fruits of Africa"
              options={[
                { value: "1", label: "Orange" },
                { value: "2", label: "Apple" },
                { value: "3", label: "Grape" },
              ]}
              helperText="Fruits"
              component={Select}
            />
            <Field
              name="country"
              options={countries}
              component={Autocomplete}
              textFieldProps={{
                label: "Countries of the world",
              }}
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default RegistrationForm;
