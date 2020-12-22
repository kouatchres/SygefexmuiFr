import React, { useState } from "react";
import Link from "next/link";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UpdatePopup from "../../utils/UpdatePopup";
import Transcript from "../../results/candidate/Transcript";

const useStyles = makeStyles((theme) => ({
  theme,
  containerStyled: {
    alignItems: "left",
    justifyItems: "left",
    borderBottom: "0.1rem solid #000",
  },
}));

const RegistrationDetails = (registrationInfo) => {
  const classes = useStyles();
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: "",
  });

  const { centerExamSessionSpecialty, id } = {
    ...registrationInfo.registrationInfo,
  };
  const { centerExamSession } = { ...centerExamSessionSpecialty };
  const { examSession, center } = { ...centerExamSession };
  const { exam, session } = { ...examSession };
  const { sessionName } = { ...session };
  const { examName } = { ...exam };
  const { centerNumber, centerCode } = { ...center };
  console.log(registrationInfo.registrationInfo);
  console.log(id);

  const callUpdatePopup = (event) => {
    setUpdatePopupState((prev) => ({ ...prev, isOpen: true }));
  };

  const handleUpdatePopupClose = () => {
    setUpdatePopupState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  console.log(updatePopupState);
  return (
    <Grid container className={classes.containerStyled}>
      <Grid item xs={12} sm={2}>
        <Typography variant="body2">
          <span>{centerNumber}</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="body2">
          <span>{centerCode}</span>
        </Typography>
      </Grid>
      <Grid item xs={6} sm={2}>
        <Typography variant="body2">
          <span>{sessionName}</span>
        </Typography>
      </Grid>
      <Grid item xs={6} sm={2}>
        <Typography variant="body2">
          <span>{examName}</span>
        </Typography>
      </Grid>

      <Grid item xs={12} sm={2}>
        <Typography variant="body2">
          <span>
            <Link
              href={{
                pathname: "/show/results/candResults",
                query: { id },
              }}
            >
              <a onClick={callUpdatePopup}>Resultats </a>
            </Link>
          </span>
        </Typography>
        <UpdatePopup
          isOpen={updatePopupState.isOpen}
          onClose={handleUpdatePopupClose}
        >
          <Transcript id={id} />
        </UpdatePopup>
      </Grid>
    </Grid>
  );
};

export default RegistrationDetails;
