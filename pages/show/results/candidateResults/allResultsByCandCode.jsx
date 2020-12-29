import React from "react";
import ResultsByCandCode from "../../../../src/components/results/candidate/ResultsByCandCode";
import GatedSignIn from "../../../../src/components/user/GatedSignin";

const allResultsByCandCode=()=> {
  return (
    <GatedSignIn>
      <ResultsByCandCode />
    </GatedSignIn>
  );
}
export default allResultsByCandCode;
