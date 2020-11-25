import React from "react";
import NewCenter from "../../src/components/center/NewCenter";
import GatedSignin from "../../src/components/user/GatedSignin";

const newCenter = (props) => {
  return (
    <GatedSignin>
      <NewCenter />
    </GatedSignin>
  );
};
export default newCenter;
