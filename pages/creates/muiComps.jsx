import React from "react";
import MuiComp from "../../src/components/attendance/MuiComp";
import GatedSignin from "../../src/components/user/GatedSignin";

const muiComps = () => {
  return (
    <GatedSignin>
      <MuiComp />
    </GatedSignin>
  );
};
export default muiComps;
