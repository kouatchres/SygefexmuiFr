import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import RegionList from "../../../src/components/region/RegionList";

const allRegions = () => {
  return (
    <GatedSignIn>
      <RegionList />
    </GatedSignIn>
  );
};
export default allRegions;
