import React from "react";
import AllMuiFields from "../../src/components/attendance/AllMuiFields";
import GatedSignin from "../../src/components/user/GatedSignin";

const muiComps = () => {
  return (
    <GatedSignin>
      <AllMuiFields />
    </GatedSignin>
  );
};
export default muiComps;
