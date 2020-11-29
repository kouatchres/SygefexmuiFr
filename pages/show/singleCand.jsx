import { useRouter } from "next/router";
import React from "react";
import CandidateReceipt from "../../src/components/candidate/CandidateReceipt";
import GatedSignin from "../../src/components/user/GatedSignin";

const singleCand = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <GatedSignin>
      <CandidateReceipt id={id} />
    </GatedSignin>
  );
};
export default singleCand;
