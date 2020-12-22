import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";

const RegionRow = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(8, 1fr);
  grid-gap: 0.5rem;
  font-size: 1.2rem;
  border-bottom: 1px solid black;
  padding-left: 15px;
`;

const CellBlock = styled.div`
  /* min-width: 7vw; */
  align-items: left;
  justify-items: left;
  align-content: left;
`;

const RegistrationDetails =({registration})=> {

  
    const { candRegistrationNumber, candidate, id, candExamSecretCode } = {
      ...registration,
    };
    return (
      <>
        <RegionRow>
          <CellBlock>
            <Link
              href={{
                pathname: "/show/results/candResults",
                query: { id },
              }}
            >
              <a target="_blank">{candRegistrationNumber} </a>
            </Link>
            <span></span>
          </CellBlock>
          <CellBlock>
            <span>{candidate.cand1stName}</span>
          </CellBlock>
          <CellBlock>
            <span>{candidate.cand2ndName}</span>
          </CellBlock>
          <CellBlock>
            <span>{candidate.cand3rdName}</span>
          </CellBlock>
          <CellBlock>
            <span>{format(candidate.dateOfBirth, "MMM d, YYYY")}</span>
          </CellBlock>
          <CellBlock>
            <span>{candidate.placeOfBirth}</span>
          </CellBlock>
          <CellBlock>
            <span>{candidate.gender.genderName}</span>
          </CellBlock>

          <CellBlock>
            <span>{candExamSecretCode}</span>
          </CellBlock>
          <CellBlock>
            <Link
              href={{
                pathname: "/show/results/candResults",
                query: { id },
              }}
            >
              <a target="_blank">Resultats </a>
            </Link>
          </CellBlock>
          
        </RegionRow>
      </>
    );
}
export default RegistrationDetails;
