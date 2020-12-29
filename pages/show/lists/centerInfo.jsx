import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import CenterListDetails from "../../../src/components/center/CenterListDetails";

const centerInfo = () => {
  return (
    <GatedSignIn>
      <CenterListDetails />
    </GatedSignIn>
  );
};
export default centerInfo;
