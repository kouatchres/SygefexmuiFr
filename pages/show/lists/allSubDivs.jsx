import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import SubDivisionList from "../../../src/components/subDivision/SubDivisionList";

const centerResults = () => {
  return (
    <GatedSignIn>
      <SubDivisionList />
    </GatedSignIn>
  );
};
export default centerResults;
