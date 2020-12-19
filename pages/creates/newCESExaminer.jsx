import React from "react";
import CreateCESExaminer from "../../src/components/CESExaminer/CreateCESExaminer";
// import div from '../../src/components/styles/div';
import GatedSignin from "../../src/components/user/GatedSignin";
const newCESExaminer = (props) => {
  return (
    <GatedSignin>
      <CreateCESExaminer />
    </GatedSignin>
  );
};
export default newCESExaminer;
