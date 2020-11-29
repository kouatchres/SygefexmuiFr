import { useRouter } from "next/router";
import React from "react";
import SingleCandidateHooks from "../../src/components/candidate/SingleCandidateHooks";
import GatedSignin from "../../src/components/user/GatedSignin";

const singleCand = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <GatedSignin>
      <SingleCandidateHooks id={id} />
    </GatedSignin>
  );
};
export default singleCand;
