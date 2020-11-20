import React from "react";
import NewRank from "../../src/components/rank/NewRank";
import GatedSignin from "../../src/components/user/GatedSignin";

const newRank = () => {
  return (
      <GatedSignin>
        <NewRank />
      </GatedSignin>
  );
};
export default newRank;
