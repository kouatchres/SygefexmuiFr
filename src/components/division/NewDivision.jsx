import React, { useState, useEffect } from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form, Field } from "formik";
import { Box, MenuItem, Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { StyledForm } from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";
import { getObjectFromID } from "../queries&Mutations&Functions/Functions";
import { createDivisionMutation } from "../queries&Mutations&Functions/Mutations";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const validationSchema = Yup.object().shape({
  divName: Yup.string().required("Nom Département Obligatoire"),
  divCode: Yup.string().required("Code Département Obligatoire"),
  region: Yup.object().required("Région Obligatoire"),
});

const NewDivision = () => {
  const client = useApolloClient();
  const [regions, setRegions] = useState([]);

  const initialValues = {
    divName: "",
    divCode: "",
    region: "",
  };
  const loadRegionData = async () => {
    const { error, data } = await client.query({ query: getAllRegionsQuery });
    console.log(data.regions);
    setRegions(data.regions);
  };

  useEffect(() => {
    loadRegionData();
  }, []);

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
            region: values.region && getObjectFromID(values.region.value),
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
          <MinimStyledPage>
            <h4>Nouveau Département</h4>
            <Error error={error} />
            <StyledForm
              disabled={isSubmitting || loading}
              aria-busy={isSubmitting || loading}
            >
              <Form>
                <AllControls>
                  <Box margin={0.5}>
                    <Field
                      component={TextField}
                      name="divName"
                      type="text"
                      label="Nom Département"
                      disabled={isSubmitting}
                    />
                  </Box>
                  <Box margin={0.5}>
                    <Field
                      component={TextField}
                      name="divCode"
                      type="text"
                      label="Code Département"
                      disabled={isSubmitting}
                    />
                  </Box>
                  <Box margin={0.5}>
                    <Field
                      select
                      type="text"
                      component={TextField}
                      name="region"
                      margin="normal"
                      onChange={(value) =>
                        setFieldValue("region", value.target)
                      }
                      placeholder="la Région"
                      disabled={isSubmitting}
                    >
                      {regions &&
                        regions.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.regName}
                          </MenuItem>
                        ))}
                    </Field>
                  </Box>

                  <Box margin={0.5}>
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      Valid{isSubmitting ? "ation en cours" : "er"}
                    </Button>
                  </Box>
                </AllControls>
              </Form>
            </StyledForm>
          </MinimStyledPage>
        );
      }}
    </Formik>
  );
};
export default NewDivision;
