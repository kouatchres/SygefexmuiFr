import React from "react";
import UpdateDivision from "../../src/components/division/UpdateDivision";
import GatedSignin from "../../src/components/user/GatedSignin";
import { useRouter } from "next/router";

const updateDivision = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <GatedSignin>
    console.log({id})
      <UpdateDivision id={id} />
    </GatedSignin>
  );
};
export default updateDivision;
