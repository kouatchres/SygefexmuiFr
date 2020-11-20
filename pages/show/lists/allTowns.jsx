import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import TownList from "../../../src/components/town/TownList";

const allTowns = () => {
  return (
    <GatedSignIn>
      <TownList />
    </GatedSignIn>
  );
};
export default allTowns;
