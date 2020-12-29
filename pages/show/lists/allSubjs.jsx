import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import SubjectList from "../../../src/components/subject/SubjectList";

const allSubjs = () => {
  return (
    <GatedSignIn>
      <SubjectList />
    </GatedSignIn>
  );
};
export default allSubjs;
