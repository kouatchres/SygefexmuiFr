import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ErrorStyles: {
    padding: "0.5rem",
    // background: "black",
    margin: "0.1rem",
    borderRadius: "0.5rem",
    border: "0.04rem solid rgba(0, 0, 0, 0.05)",
    borderLeft: "0.05rem solid red",
  },
  p: {
    margin: "0.01rem",
    fontSize: ".6rem",
    fontWeight: "normal",
  },
  strong: {
    fontSize: "0.7rem",
    fontWeight: "normal",
    marginSLight: "0.15rem",
  },
});

const DisplayError = ({ error }) => {
  const classes = useStyles();
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div className={classes.ErrorStyles} key={i}>
        <p className={classes.p}>
          <strong className={classes.strong}>Erreure réseaux!</strong>
          {error.message.replace("Network error: ", "")}
        </p>
      </div>
    ));
  }
  return (
    <div className={classes.ErrorStyles}>
      <p className={classes.p}>
        <strong className={classes.strong}>Erreure !</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </div>
  );
};

DisplayError.defaultProps = {
  error: {},
};

export default DisplayError;

// DisplayError.propTypes = {
//   error: PropTypes.object,
// };
