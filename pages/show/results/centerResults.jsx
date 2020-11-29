import { useRouter } from "next/router";
import React from "react";
import DetailedResultsList from "../../../src/components/results/center/DetailedResultsList";

const centerResults = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <DetailedResultsList id={id} />
    </div>
  );
};
export default centerResults;
