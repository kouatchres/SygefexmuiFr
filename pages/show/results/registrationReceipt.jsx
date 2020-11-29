import { useRouter } from "next/router";

import React from "react";
import RegistrationReceipt from "../../../src/components/registration/RegistrationReceipt";
import GatedSignin from "../../../src/components/user/GatedSignin";

const candResults = () => {
  const router = useRouter();
  const { id } = router.query;
  // return <div>{id}</div>;
  return (
    <GatedSignin>
      <RegistrationReceipt id={id} />
    </GatedSignin>
  );
};
export default candResults;
