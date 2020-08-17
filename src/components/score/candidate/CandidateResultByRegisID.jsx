import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { StyledForm } from "../../utils/FormInputs";
import { StyledPage } from "../../styles/StyledPage";
import Error from "../../ErrorMessage";
import styled from "styled-components";
import useForm from "../../utils/useForm";
import { format } from "date-fns";
import RegistrationDetails from "./RegistrationDetails";
import { getAllCandidateRegistrationIDsQuery } from "../../queries&Mutations&Functions/Queries";
import { useApolloClient } from "@apollo/react-hooks";

const SubjectTitles = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  color: white;
  font-size: 1.5rem;
  justify-content: center;
  background: ${(props) => props.theme.blues[2]};
`;

const CandPic = styled.div`
  margin-top: 1rem;
  display: block;
  padding: 0 1rem;
  flex-direction: column;

  img {
    height: 30vh;
    width: 15vw;
    border-radius: 0.5rem;
  }
`;

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  text-align: left;
`;

const CandInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 1rem;
  justify-items: left;
`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  justify-items: left;
  grid-gap: 1rem;
  align-items: center;
`;

const StyledContainer = styled.div`
  padding: 1rem;
`;

const FirstInfo = styled.div`
  text-align: left;
  display: block;
  flex-direction: column;
  font-size: 1.5rem;
  line-height: 0.3rem;
`;

const CandidateResultsByRegisID = ({ id }) => {
  const [state, setState] = useForm({});
  const client = useApolloClient();

  // static propTypes = { id: PropTypes.string.isRequired };

  const loadCandResultsData = async () => {
    const { error, data } = await client.query({
      query: getAllCandidateRegistrationIDsQuery,
      variables: { id },
    });
    console.log(data);
    setState(data.candidate);
  };

  useEffect(() => {
    loadCandResultsData();
  }, []);
  console.log(state);
  const {
    image,
    cand1stName,
    cand2ndName,
    cand3rdName,
    email,
    placeOfBirth,
    dateOfBirth,
    dadName,
    momName,
    gender,
    registration,
  } = { ...state };
  const { genderName } = { ...gender };

  const initialValues = {
    candCode: "",
    image: "",
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    email: "",
    gender: "",
    placeOfBirth: "",
    dateOfBirth: "",
    candExamSecretCode: "",
  };

  return (
    <Formik initialValues={initialValues}>
      {({ isSubmitting }) => (
        <StyledPage>
          <h4>
            Les Resultats de:{cand1stName} {cand2ndName} {cand3rdName}
          </h4>
          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <StyledContainer>
                <CandInfo>
                  <ResultsHeader>
                    <CandPic>
                      <img src={image} alt={cand1stName} />
                    </CandPic>
                    <FirstInfo>
                      <p>
                        <span>
                          <strong> Nom: </strong> {cand1stName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Prenom: </strong> {cand2ndName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Autres Noms: </strong>
                          {cand3rdName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong>Naissance: </strong>
                        </span>
                      </p>
                      <hr />
                      <p>
                        <span>
                          <strong> Lieu: </strong> {placeOfBirth}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Date: </strong>
                          {format(dateOfBirth, "d MMM, YYYY ")}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Sexe: </strong> {genderName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Email: </strong>
                          {email}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Noms des parents: </strong>
                        </span>
                      </p>
                      <hr />
                      <p>
                        <span>
                          <strong>Père: </strong> {dadName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong>Mère: </strong> {momName}
                        </span>
                      </p>
                    </FirstInfo>
                  </ResultsHeader>
                </CandInfo>
                <SubjectTitles>
                  <TitleItem>
                    <span>Centre</span>
                  </TitleItem>
                  <TitleItem>
                    <span>Session </span>
                  </TitleItem>
                  <TitleItem>
                    <span>Examen </span>
                  </TitleItem>
                  <TitleItem>
                    <span>Resultats</span>
                  </TitleItem>
                </SubjectTitles>
                {registration &&
                  registration.map((item) => (
                    <RegistrationDetails
                      key={item.id}
                      registrationInfo={item}
                    />
                  ))}
              </StyledContainer>
            </Form>
          </StyledForm>
        </StyledPage>
      )}
    </Formik>
  );
};

export default CandidateResultsByRegisID;
