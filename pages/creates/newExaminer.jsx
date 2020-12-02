import React from "react";
import NewExaminer from "../../src/components/examiner/NewExaminer";
import GatedSignin from "../../src/components/user/GatedSignin";

const newExaminer = (props) => {
  return (
      <GatedSignin>
        <NewExaminer />
      </GatedSignin>
  );
};
export default newExaminer;
