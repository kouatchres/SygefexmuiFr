import React from "react";
import CandidateResultByCandCode from "../../../src/components/score/candidate/CandidateResultByCandCode";
import GatedSignIn from "../../../src/components/user/GatedSignin";
function candCodeResults({ query }) {
    return (
          <GatedSignIn>
            <CandidateResultByCandCode id={query.id} />
           </GatedSignIn>
    );
}
export default candCodeResults;
