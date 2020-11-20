import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import CenterList from "../../../src/components/center/CenterList";

const allCenters = () => {
  return (
    <GatedSignIn>
      <CenterList />
    </GatedSignIn>
  );
};
export default allCenters;
