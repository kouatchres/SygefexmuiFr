import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Employees from "../../src/components/muiForms/Employees";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const employees = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageContent}>
      <Employees />
    </Paper>
  );
};
export default employees;
