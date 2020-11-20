import React from "react";
import DetailedResultsList from "../../../src/components/results/center/DetailedResultsList";

const centerResults = ({ query }) => {
  return (
    <div>
      <DetailedResultsList id={query.id} />
    </div>
  );
};
export default centerResults;
