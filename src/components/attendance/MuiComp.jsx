import React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'material-ui-formik-components/TextField'
import { Select } from 'material-ui-formik-components/Select'

class RegistrationForm extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: '',
            gender: 'Male',
          }}
          onSubmit={values => {
            alert(`Username: ${values.username}\nGender: ${values.gender}`)
          }}
        >
          {formik => (
            <Form>
              <Field name="username" label="Username" component={TextField} />
              <Field
                required
                name="gender"
                label="Gender"
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' },
                ]}
                component={Select}
              />
              <Field
                required
                name="fruits"
                label="Fruits"
                options={[
                  { value: 'orange', label: 'Orange' },
                  { value: 'apple', label: 'Apple' },
                  { value: 'mango', label: 'Mango' },
                ]}
                component={Select}
              />
              <button type="submit" disabled={!formik.dirty}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default RegistrationForm
