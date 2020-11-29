import React from "react";
import NewCandidates from "../../src/components/candidate/NewCandidates";
import GatedSignin from "../../src/components/user/GatedSignin";

const newCand = () => {
  return (
    <GatedSignin>
      <NewCandidates />
    </GatedSignin>
  );
};
export default newCand;
