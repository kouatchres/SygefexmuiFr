import { useRouter } from "next/router";
import React from "react";
import SingleExaminerMui from "../../src/components/examiner/SingleExaminerMui";
import GatedSignin from "../../src/components/user/GatedSignin";

const singleExaminer = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <GatedSignin>
      <SingleExaminerMui id={id} />
    </GatedSignin>
  );
};
export default singleExaminer;
