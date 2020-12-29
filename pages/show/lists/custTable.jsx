import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import MuiTableCust from "../../../src/components/muiTableCustomize/MuiTableCust";

const custTable = () => {
  return (
    <GatedSignIn>
      <MuiTableCust />
    </GatedSignIn>
  );
};
export default custTable;
