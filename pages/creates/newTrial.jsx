import React from "react";
import Trial from "../../src/components/candidate/Trial";
import GatedSignin from "../../src/components/user/GatedSignin";

const newTrial = (props) => {
  return (
    <div>
      <GatedSignin>
        <Trial getProps={props} />
      </GatedSignin>
    </div>
  );
};
export default newTrial;
