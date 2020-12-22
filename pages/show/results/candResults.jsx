import React from "react";
import Transcript from "../../../src/components/results/candidate/Transcript";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import { useRouter } from "next/router";

const candResults = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <GatedSignIn>
      <Transcript id={id} />
    </GatedSignIn>
  );
};
export default candResults;
