import React, { useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import useForm from "../utils/useForm";
import * as Yup from "yup";
import { useRouter } from "next/router";

import { updateDivisionMutation } from "../queries&Mutations&Functions/Mutations";
import { singleDivisionQuery } from "../queries&Mutations&Functions/Queries";
import {
  StyledForm,
  SygexInput,
  StyledButton,
  ButtonStyled,
} from "../utils/FormInputs";

const validationSchema = Yup.object().shape({
  divName: Yup.string().required("Nom du département Obligatoire"),
  divCode: Yup.string().required("Code du département Obligatoire"),
});
const UpdateDivision = (id) => {
  const [state, setState] = useForm({});
  const client = useApolloClient();
  // console.log(id);

  const loadDivisionData = async () => {
    const { data, error } = await client.query({
      query: singleDivisionQuery,
      variables: { id },
    });
    console.log(data);
    setState(data.division);
  };

  useEffect(() => {
    console.log({ id });
    loadDivisionData();
  }, []);
  const initialValues = {
    divName: "",
    divCode: "",
  };
  console.log(state);
  const [updateDivision] = useMutation(updateDivisionMutation, {
    variables: { id },
  });

  return (
    <Formik
      initialValues={state || initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateDivision({
          variables: { ...values },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
      method="POST"
    >
      {({ values, isSubmitting }) => (
        <MinimStyledPage>
          <h4>Correction info département</h4>
          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <SygexInput
                type="text"
                id="divName"
                name="divName"
                placeholder="Nom du Département"
                disabled={isSubmitting}
                required
              />
              <SygexInput
                type="text"
                id="divCode"
                name="divCode"
                placeholder="Code du Département"
                disabled={isSubmitting}
                required
              />
              <ButtonStyled>
                <StyledButton type="submit">
                  Valid{isSubmitting ? "ation en cours" : "er"}
                </StyledButton>
              </ButtonStyled>
            </Form>
          </StyledForm>
        </MinimStyledPage>
      )}
    </Formik>
  );
};

export default UpdateDivision;
