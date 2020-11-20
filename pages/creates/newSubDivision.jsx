import React from "react";
import NewSubDivision from "../../src/components/subDivision/NewSubDivision";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSubDivision = () => {
  return (
    <GatedSignin>
      <NewSubDivision />
    </GatedSignin>
  );
};
export default newSubDivision;
