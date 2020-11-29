import React from "react";
import ExamRegistration from "../../src/components/registration/ExamRegistration";
import GatedSignin from "../../src/components/user/GatedSignin";

const newRegister = () => {
  return (
    // <GatedSignin>
    <ExamRegistration />
    // </GatedSignin>
  );
};
export default newRegister;
