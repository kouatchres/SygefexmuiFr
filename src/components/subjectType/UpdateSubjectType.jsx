import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateSubjectTypeMutation } from '../queries&Mutations&Functions/Mutations';
import { singleSubjectTypeQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';
import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdateSubjectType = ({ id }) => {
	const [state, setState] = useForm({ subjectTypeCode: '', subjectTypeName: '' })
	const client = useApolloClient()


	const loadSubjTypeData = async () => {
		const { data } = await client.query({
			query: singleSubjectTypeQuery,
			variables: { id }

		})
		const getSubjTypeData = data.subjectType
		console.log(getSubjTypeData)
		const {
			subjectTypeName,
			subjectTypeCode,
		} = getSubjTypeData

		setState({ subjectTypeCode: subjectTypeCode, subjectTypeName: subjectTypeName })
	}
	useEffect(() => {
		loadSubjTypeData()
	}, [])


	const validationSchema = Yup.object().shape({
		subjectTypeName: Yup.string().required("Nom de type de matière obligatoire"),
		subjectTypeCode: Yup.string().required("Code de type de matière  obligatoire"),
	})
	const [updateSubjectType] = useMutation(updateSubjectTypeMutation, {
		variables: { id },
		refetchQueries: ["singleSubjectTypeQuery"]
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateSubjectType({
					variables: {
						...values,
						id: id
					},
				});
				// Router.push({
				// 	pathname: '/show/singleExam',
				// 	query: { id }
				// });
				setTimeout(() => {
					console.log(JSON.stringify(values, null, 2));
					console.log(res);
					resetForm(true);
					setSubmitting(false);
				}, 200);
			}}
		>
			{({ values, isSubmitting }) => (

				<MiniStyledPage>
					<h4>Modification d'info Type de matière </h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="subjectTypeName"
									name="subjectTypeName"
									label="Nom  type de matière"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="subjectTypeCode"
									name="subjectTypeCode"
									label="Code type de matière"
									disabled={isSubmitting}
								/>
								<ButtonStyled className="submitButton">
									<StyledButton type="submit">
										valid{isSubmitting ? 'ation en cours' : 'er'}
									</StyledButton>
								</ButtonStyled>
							</Controls>
						</Form>
					</StyledForm>
				</MiniStyledPage>
			)}
		</Formik>
	);
}

export default UpdateSubjectType;
