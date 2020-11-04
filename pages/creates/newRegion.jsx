import React from "react";
import NewRegionMui from "../../src/components/region/NewRegionMui";
import GatedSignin from "../../src/components/user/GatedSignin";

const newRegion = () => {
  return (
    <GatedSignin>
      <NewRegionMui />
    </GatedSignin>
  );
};
export default newRegion;
