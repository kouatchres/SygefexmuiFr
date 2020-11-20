import React from "react";
import NewExam from "../../src/components/exam/NewExam";
import GatedSignin from "../../src/components/user/GatedSignin";

const newExam = () => {
  return (
    <GatedSignin>
      <NewExam />
    </GatedSignin>
  );
};
export default newExam;
