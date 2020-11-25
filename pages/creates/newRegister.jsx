import React from "react";
import NewRegistration from "../../src/components/registration/NewRegistration";
import GatedSignin from "../../src/components/user/GatedSignin";

const newRegister = () => {
  return (
    <div>
      <GatedSignin>
        <NewRegistration />
      </GatedSignin>
    </div>
  );
};
export default newRegister;
