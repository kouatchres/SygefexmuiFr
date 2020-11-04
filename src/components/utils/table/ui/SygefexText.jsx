import React from "react";
import styled from "styled-components";

const StyledTextField = styled.input`
  padding: 0.5rem;
  border-radius: 0.6rem;
  font-size: 1.5rem;
  box-sizing: border-box;
  margin: 0 auto;
  width: 80vw;
  border: 0.05rem solid ${(props) => props.theme.grey};
  &:focus,
  &active {
    outline: none;
    border: none;
    border-bottom: 0.2rem solid ${(props) => props.theme.britishRed};
    border-radius: 0;
  }
  /* &:focus + label {
    top: -0.25rem;
    font-size: 1.1rem;
    color: #aaa;
  } */
`;

const SygefexText = ({ value, onChange, label, placeholder }) => {
  return (
    <StyledTextField
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value, e)}
    />
  );
};

export default SygefexText;
