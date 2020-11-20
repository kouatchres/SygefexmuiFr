import React from "react";
import RegistrationMui from "../../src/components/registration/RegistrationMui";
import GatedSignin from "../../src/components/user/GatedSignin";

const newRegister = () => {
  return (
    <div>
      <GatedSignin>
        <RegistrationMui />
      </GatedSignin>
    </div>
  );
};
export default newRegister;
