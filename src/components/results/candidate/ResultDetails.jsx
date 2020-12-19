import React from "react";
import { roundFloatNumber } from "../../queries&Mutations&Functions/Functions";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  containerStyled: {
    display: "grid",
    // marginTop:"0.2rem",
    gridTemplateColumns: "4fr 0.3fr 1.5fr 1.5fr",
    alignItems: "left",
    justifyItems: "left",
    borderBottom: "0.1rem solid #000",
  },
});

const ResultDetails = ({ score }) => {
  const classes = useStyles();
  const { subjectAve, coeff, subjectSpecialty } = { ...score };
  const { subject } = { ...subjectSpecialty };

  return (
    <Grid container className={classes.containerStyled}>
      <Grid item style={{ marginLeft: "0.3rem" }}>
        <Typography variant="body2">
          <span>{subject.subjectName}</span>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          <span>{coeff}</span>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          <span>{subjectAve}</span>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          <span>{roundFloatNumber(coeff * subjectAve, 3)}</span>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ResultDetails;
