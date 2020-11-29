import React from "react";
import RegistrationReceipt from "../../../src/components/registration/RegistrationReceipt";
import GatedSignin from "../../../src/components/user/GatedSignin";

const candResults = (query) => {
  return (
    <GatedSignin>
      {console.dir(query)}
      <RegistrationReceipt id={query} />
    </GatedSignin>
  );
};
export default candResults;
