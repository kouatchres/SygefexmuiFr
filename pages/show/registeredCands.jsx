import React from "react";
import GetCenterCandDetailsInfo from "../../src/components/center/GetCenterCandDetailsInfo";
import GatedSignin from "../../src/components/user/GatedSignin";

const registeredCands = () => {
  return (
    <GatedSignin>
      <GetCenterCandDetailsInfo />
    </GatedSignin>
  );
};
export default registeredCands;
