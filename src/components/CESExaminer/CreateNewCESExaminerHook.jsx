import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import Router from "next/router";
import { Formik, Form } from "formik";
import {
  SygexInput,
  SygefexSelect,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import Notification from "../utils/Notification";

import styled from "styled-components";
import * as Yup from "yup";
import useForm from "../utils/useForm";
import {
  getSelectedObject,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import { createCenterExamSessionExaminerMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getSingleCenterQuery,
  getAllPhasesQuery,
  getAllRanksOfAnExamPhaseQuery,
} from "../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 13rem;
  margin: 0 1rem;
  padding-bottom: 0;
  margin-bottom: 0;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 17rem; */
`;

const validationSchema = Yup.object().shape({
  // exam: Yup
  //     .string()
  //     .required("Choix De l'examen Obligatoire"),
  // session: Yup
  //     .string()
  //     .required("Choix de la session Obligatoire"),
  // phase: Yup
  //     .string()
  //     .required("Choix de la phase de l'examen Obligatoire"),
  phaseRank: Yup.string().required("Choix du poste exige"),
  examinerCode: Yup.string().required("Code secret examinateur Obligatoire"),
  // centerNumber: Yup
  //     .number()
  //     .min(0, 'Pas de note négative')
  //     .required('No du centre obligatoire'),
});

const CreateNewCESExaminer = () => {
  const initialValues = {
    phaseRank: "",
    examinerCode: "",
  };

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [state, setState, handleReactSelectChange] = useForm({
    centerNumber: "",
    examID: "",
    sessionID: "",
    phaseID: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const makeExaminerObject = (profCodeValue) => {
    const storedProf = {
      examinerCode: `${profCodeValue}`,
    };
    return storedProf;
  };

  const { data: dataExams, loading: loadingExams, errorExams } = useQuery(
    getAllExamsQuery
  );

  const getExams = dataExams && dataExams.exams;
  console.log(getExams);
  const removeExamName =
    getExams && getExams.map(({ examName, ...others }) => others);
  const refinedExams = getExams && removeTypename(removeExamName);
  const getExamOptions =
    getExams &&
    getExams.map((item) => ({ value: item.id, label: item.examName }));

  const { data: dataSession, loading: loadingSession, errorSession } = useQuery(
    getAllSessionsQuery
  );

  const getSessions = dataSession && dataSession.sessions;
  const refinedSessions = removeTypename(getSessions);
  const getSessionOptions =
    getSessions &&
    getSessions.map((item) => ({
      ...item,
      value: item.id,
      label: item.sessionName,
    }));

  const {
    data: dataExamSession,
    loading: loadingExamSession,
    errorExamSession,
  } = useQuery(getExamSessionQuery, {
    skip: !state.examID || !state.sessionID,
    variables: {
      exam: getExams && getSelectedObject(refinedExams, state.examID),
      session:
        getSessions && getSelectedObject(refinedSessions, state.sessionID),
    },
  });

  console.log(dataExamSession);
  const getExamSessions = dataExamSession && dataExamSession.examSessions;
  const refinedES = getExamSessions && removeTypename(getExamSessions);
  const reducedES = refinedES && refinedES[0];
  console.log(reducedES);

  const { data: dataCenter, loading: loadingCenter, errorCenter } = useQuery(
    getSingleCenterQuery,
    {
      skip: !state.centerNumber,
      variables: {
        centerNumber: state.centerNumber,
      },
    }
  );

  const getCenterByNumber = dataCenter && dataCenter.centerByNumber;
  const newCenter = getCenterByNumber && removeTypename(getCenterByNumber);
  console.log(newCenter);

  const { data: dataCES, loading: loadingCES, errorCES } = useQuery(
    getSingleCenterExamSessionQuery,
    {
      skip: !reducedES || !getCenterByNumber,
      variables: {
        examSession: reducedES && reducedES,
        center: newCenter && newCenter,
      },
    }
  );

  console.log(dataCES);
  const getCenterExamSessionsByCode =
    dataCES && dataCES.centerExamSessionsByCode;
  console.log(getCenterExamSessionsByCode);
  // remove typename from the object
  const refinedCenterExamSessionsByCode =
    getCenterExamSessionsByCode && removeTypename(getCenterExamSessionsByCode);
  // transform the array into a single object
  const getCES =
    refinedCenterExamSessionsByCode && refinedCenterExamSessionsByCode[0];
  console.log(getCES);

  const {
    data: dataPhase,
    loading: loadingPhase,
    error: errorPhase,
  } = useQuery(getAllPhasesQuery);

  console.log(dataPhase);

  const getPhases = dataPhase && dataPhase.phases;
  console.log(getPhases);
  const refinedPhase = getPhases && removeTypename(getPhases);
  console.log(refinedPhase);

  const getPhaseOptions =
    getPhases &&
    getPhases.map((item) => ({
      ...item,
      value: item.id,
      label: item.phaseName,
    }));

  const {
    data: dataPhaseRank,
    loading: loadingPhaseRank,
    error: errorPhaseRank,
  } = useQuery(getAllRanksOfAnExamPhaseQuery, {
    variables: { id: state.phaseID },
  });

  console.log(dataPhaseRank);
  const getThePhase = dataPhaseRank && dataPhaseRank.phase;
  const { phaseRank } = { ...getThePhase };
  const refinedPhaseRanks = phaseRank && removeTypename(phaseRank);
  const getPhaseRankOptions =
    refinedPhaseRanks &&
    refinedPhaseRanks.map((item) => ({
      ...item,
      value: item.id,
      label: item.rank.rankName,
    }));
  console.log(phaseRank);

  const [CreateCenterExamSessionExaminer, { loading, error }] = useMutation(
    createCenterExamSessionExaminerMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await CreateCenterExamSessionExaminer({
          variables: {
            ...values,
            examiner: makeExaminerObject(values.examinerCode),
            centerExamSession: getCES && getCES,
            phaseRank: refinedPhaseRanks && { id: values.phaseRank.value },
          },
        });
        res &&
          Router.push({
            pathname: "/show/examinerRegReceipt",
            query: { id: res.data.createCenterExamSessionExaminer.id },
          });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: "Nouveau département créé avec success",
            type: "success",
          });
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <MinimStyledPage>
          <h4> Inscription d'examinateur</h4>
          <Error
            error={
              error ||
              errorExams ||
              errorSession ||
              errorExamSession ||
              errorCenter ||
              errorCES ||
              errorPhase ||
              errorPhaseRank
            }
          />
          <StyledForm
            disabled={
              isSubmitting ||
              loadingExams ||
              loadingSession ||
              loadingExamSession ||
              loadingCenter ||
              loadingCES ||
              loadingPhase ||
              loading ||
              loadingPhaseRank
            }
            aria-busy={
              isSubmitting ||
              loadingExams ||
              loadingSession ||
              loadingExamSession ||
              loadingCenter ||
              loadingCES ||
              loadingPhase ||
              loading ||
              loadingPhaseRank
            }
          >
            <Form>
              <AllControls>
                <InputGroup>
                  <SygexInput
                    value={getCenterByNumber && getCenterByNumber.centerCode}
                    name="centerName"
                    type="text"
                    label=" Nom du centre"
                    disabled={isSubmitting}
                  />
                  <SygexInput
                    onChange={handleChange}
                    name="centerNumber"
                    type="number"
                    value={state.centerNumber || ""}
                    label="no du centre"
                    disabled={isSubmitting}
                  />

                  <SygefexSelect
                    onChange={handleReactSelectChange}
                    name="sessionID"
                    options={getSessionOptions}
                    placeholder={"La Session"}
                    disabled={isSubmitting}
                  />
                  <SygefexSelect
                    onChange={handleReactSelectChange}
                    name="examID"
                    options={getExamOptions}
                    placeholder={"L'Examen"}
                    disabled={isSubmitting}
                  />
                  <SygefexSelect
                    onChange={handleReactSelectChange}
                    name="phaseID"
                    options={getPhaseOptions}
                    placeholder={"La phase l'Examen"}
                    disabled={isSubmitting}
                  />
                  <SygefexSelect
                    onChange={(value) => setFieldValue("phaseRank", value)}
                    name="phaseRank"
                    options={getPhaseRankOptions}
                    placeholder={"Le poste"}
                    disabled={isSubmitting}
                  />
                  <SygexInput
                    name="examinerCode"
                    type="text"
                    label="Code de l'Examinateur"
                    disabled={isSubmitting}
                  />
                </InputGroup>
                <Notification notify={notify} setNotify={setNotify} />

                <ButtonStyled>
                  <StyledButton type="submit">
                    Valid{isSubmitting ? "ation en cours" : "er"}
                  </StyledButton>
                </ButtonStyled>
              </AllControls>
            </Form>
          </StyledForm>
        </MinimStyledPage>
      )}
    </Formik>
  );
};
export default CreateNewCESExaminer;
