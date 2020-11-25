import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import FRadioGroup from "../muiComponents/controls/SygefexMuiRadioGroup";
import FDatePicker from "../muiComponents/controls/FDatePicker";

class RegistrationForm extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: "",
            gender: "Male",
          }}
          onSubmit={(values) => {
            alert(`Username: ${values.username}\nGender: ${values.gender}`);
          }}
        >
          {(formik) => (
            <Form>
              <Field name="username" label="Username" component={TextField} />
              <Field
                required
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
                required
                name="education"
                component={FRadioGroup}
                label="Education"
                options={[
                  { value: "", label: "-- Please Select --" },
                  { value: "Elementary", label: "Elementary" },
                  { value: "High School", label: "High School" },
                  { value: "Bachelor", label: "Bachelor" },
                  { value: "Master", label: "Master" },
                  { value: "Ph.D.", label: "Ph.D." },
                ]}
                groupProps={{ row: true }}
              />
              <button type="submit" disabled={!formik.dirty}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default RegistrationForm;
