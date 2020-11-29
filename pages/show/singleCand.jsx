import React from "react";
import SingleCandidateHooks from "../../src/components/candidate/SingleCandidateHooks";
import GatedSignin from "../../src/components/user/GatedSignin";

const singleCand=({ query })=> {
  return (
    <GatedSignin>
      <p> {query}</p>
      <SingleCandidateHooks id={query.id} />
    </GatedSignin>
  );
}
export default singleCand;
