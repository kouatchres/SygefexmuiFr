import styled from "styled-components";
import React from "react";

import PropTypes from "prop-types";

const ErrorStyles = styled.div`
  padding: 0.5rem;
  background: black;
  margin: 0 1.1rem;
  border-radius: 0.5rem;
  border: 0.04rem solid rgba(0, 0, 0, 0.05);
  /* border-right: 0.08rem solid red; */
  border-left: 0.05rem solid red;
  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: normal;
  }
  strong {
    font-size: 1.6rem;
    font-weight: normal;
    margin-right: 0.15rem;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p>
          <strong>Erreure réseaux!</strong>
          {error.message.replace("Network error: ", "")}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p>
        <strong>Erreure !</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </ErrorStyles>
  );
};

DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;
