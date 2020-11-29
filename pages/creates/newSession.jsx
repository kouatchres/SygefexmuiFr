import React from "react";
import NewSession from "../../src/components/session/NewSession";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSession = () => {
  return (
      <GatedSignin>
        <NewSession />
      </GatedSignin>
  );
};
export default newSession;
