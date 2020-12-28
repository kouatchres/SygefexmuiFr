import React from "react";
import RegPhaseRank from "../../src/components/phaseRank/RegPhaseRank";
import GatedSignin from "../../src/components/user/GatedSignin";

const newPhaseRank = () => {
  return (
      <GatedSignin>
        <RegPhaseRank />
      </GatedSignin>
  );
};
export default newPhaseRank;
