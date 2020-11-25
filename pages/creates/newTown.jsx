import React from "react";
import NewTown from "../../src/components/town/NewTown";
import GatedSignin from "../../src/components/user/GatedSignin";

const newTown = () => {
  return (
    <GatedSignin>
      <NewTown />
    </GatedSignin>
  );
};
export default newTown;
