import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import NewRankList from "../../../src/components/rank/NewRankList";

const allRanks = () => {
  return (
    <GatedSignIn>
      <NewRankList />
    </GatedSignIn>
  );
};
export default allRanks;
