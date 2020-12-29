import React from "react";
import ResultsByCandRegMat from "../../../../src/components/results/candidate/ResultsByCandRegMat";
import GatedSignIn from "../../../../src/components/user/GatedSignin";

const resultsByCandRegNo=()=> {
  return (
    <GatedSignIn>
      <ResultsByCandRegMat />
    </GatedSignIn>
  );
}
export default resultsByCandRegNo;
