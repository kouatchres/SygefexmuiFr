import { useRouter } from "next/router";

import React from "react";
import NewRegistrationReceipt from "../../../src/components/registration/NewRegistrationReceipt";
import GatedSignin from "../../../src/components/user/GatedSignin";

const candResults = () => {
  const router = useRouter();
  const { id } = router.query;
  // return <div>{id}</div>;
  return (
    <GatedSignin>
      <NewRegistrationReceipt id={id} />
    </GatedSignin>
  );
};
export default candResults;
