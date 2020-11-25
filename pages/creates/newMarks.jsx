import React from "react";
import EnterNewMarks from "../../src/components/score/EnterNewMarks";
import GatedSignin from "../../src/components/user/GatedSignin";

const newMarks = () => {
  return (
      <GatedSignin>
        <EnterNewMarks />
      </GatedSignin>
  );
};
export default newMarks;
