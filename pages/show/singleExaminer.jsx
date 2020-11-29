import React from "react";
import SingleExaminer from "../../src/components/examiner/SingleExaminer";

function singleExaminer({ query }) {
  return <SingleExaminer id={query.id} />;
}
export default singleExaminer;
