import React from "react";
import { roundFloatNumber } from "../../queries&Mutations&Functions/Functions";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({theme,
  containerStyled: {
   
    alignItems: "left",
    justifyItems: "left",
    borderBottom: "0.1rem solid #000",
  },
}));

const ResultDetails = ({ score }) => {
  const classes = useStyles();
  const { subjectAve, coeff, subjectSpecialty } = { ...score };
  const { subject } = { ...subjectSpecialty };

  return (
    <Grid container className={classes.containerStyled}>
      <Grid item  xs={12} sm={6}>
        <Typography  variant="body2">
          <span>{subject.subjectName}</span>
        </Typography>
      </Grid>
      <Grid item   xs={12} sm={3}>
        <Typography variant="body2">
          <span>{subjectAve}</span>
        </Typography>
      </Grid>
      <Grid item   xs={12} sm={1}>
        <Typography variant="body2">
          <span>{coeff}</span>
        </Typography>
      </Grid>
      
      <Grid item   xs={12} sm={2}>
        <Typography variant="body2">
          <span>{roundFloatNumber(coeff * subjectAve, 3)}</span>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ResultDetails;
