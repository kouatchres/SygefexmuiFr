import React from "react";
import NewEducationType from "../../src/components/educationType/NewEducationType";
import GatedSignin from "../../src/components/user/GatedSignin";

const newEducationType = () => {
  return (
    <GatedSignin>
      <NewEducationType />
    </GatedSignin>
  );
};
export default newEducationType;
