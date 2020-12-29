import React from "react";
import UpdateMarks from "../../src/components/score/UpdateMarks";
import GatedSignin from "../../src/components/user/GatedSignin";

const updateScore = () => {
  return (
    <div>
      <GatedSignin>
        <UpdateMarks />
      </GatedSignin>
    </div>
  );
};
export default updateScore;
