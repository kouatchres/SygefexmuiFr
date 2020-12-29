// import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient } from "@apollo/react-hooks";
import { singleExaminerQuery } from "../queries&Mutations&Functions/Queries";
import UpdatePopup from "../utils/UpdatePopup";
import NewUpdateExaminer from "./NewUpdateExaminer";

const useStyles = makeStyles({
  divStyled: {
    display: "grid",
    placeItems: "center",
    top: "2rem",
    height: "90vh",
  },
  pageStyled: {
    display: "grid",
    placeItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    minWidth: "40%",
  },

  titleStyled: {
    display: "grid",
    placeItems: "center",
  },

  partTwo: {
    display: "grid",
    gridTemplateRows: "1fr 1fr ",
  },

  picStyled: {
    height: "auto",
    width: "100%",
    display: "grid",
    placeItems: "center",
    borderRadius: "0.5rem",
  },

  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "50%",
  },
});

const SingleExaminerMui = ({ id }) => {
  const client = useApolloClient();
  const classes = useStyles();
  const [state, setState] = useForm({});
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: "",
  });

  const loadExaminerData = async () => {
    const { error, data } = await client.query({
      query: singleExaminerQuery,
      variables: { id: id },
    });
    console.log(data);
    const { examiner } = data;
    setState({ examiner });
  };
  useEffect(() => {
    loadExaminerData();
  }, []);

  const callUpdatePopup = (event) => {
    setUpdatePopupState({ isOpen: true });
  };

  const handleUpdatePopupClose = () => {
    setUpdatePopupState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };
  console.log(state.examiner);

  const {
    examinerCode,
    examiner1stName,
    examiner2ndName,
    examinerOtherNames,
    examinerEmail,
    gender,
    examinerPhone,
    examinerImage,
    examinerCNI,
  } = { ...state.examiner };

  const initialValues = {
    examinerCode: "",
    examiner1stName: "",
    examiner2ndName: "",
    examinerOtherNames: "",
    examinerEmail: "",
    examinerPhone: "",
    gender: "",
    examinerImage: "",
    examinerCNI: "",
  };
  return (
    <Formik initialValues={initialValues}>
      {({ values, isSubmitting }) => (
        <div className={classes.centerAll}>
          <Paper className={classes.pageStyled} elevation={13}>
            <Form aria-busy={isSubmitting}>
              <Grid container>
                <Grid container className={classes.centerAll}>
                  <Grid item>
                    <Typography
                      className={classes.titleStyled}
                      color="primary"
                      gutterBottom
                      variant="h5"
                      component="h6"
                    >
                      Recu Examinateur
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography color="primary" variant="body1">
                      <strong>Nom:</strong> {examiner1stName}
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Prenoms: </strong>
                      {examiner2ndName}
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Autres Noms:</strong>
                      {examinerOtherNames}
                    </Typography>

                    <Typography color="primary" variant="body1">
                      <strong>Sexe:</strong> {gender}
                    </Typography>

                    <Typography color="primary" variant="body1">
                      <strong>Tel:</strong>
                      {examinerCNI}
                    </Typography>
                    <Typography color="primary" variant="body1">
                      <strong>Tel: </strong> {examinerPhone}
                    </Typography>

                    <Typography color="primary" variant="body1">
                      <strong>Email:</strong>
                      {examinerEmail}
                    </Typography>

                    <Typography color="primary" variant="body1">
                      <strong>Code:</strong> {examinerCode}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.picStyled}>
                    {
                      <img
                        className={classes.picStyled}
                        src={examinerImage}
                        alt={examiner1stName}
                      />
                    }
                    <Button onClick={callUpdatePopup}>Modifier</Button>
                  </Grid>
                  <UpdatePopup
                    isOpen={updatePopupState.isOpen}
                    onClose={handleUpdatePopupClose}
                  >
                    <NewUpdateExaminer id={id} />
                  </UpdatePopup>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        </div>
      )}
    </Formik>
  );
};

export default SingleExaminerMui;

//

//               <Button   onClick= (event, rowData) => {
//   setUpdatePopupState({ isOpen: true, id: rowData.id })
// } >
//               Modifier
//               </Button>
