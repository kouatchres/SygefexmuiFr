


import React from "react";
import CreateReport from "../../src/components/report/CreateReport";
import GatedSignin from "../../src/components/user/GatedSignin";

const newReport = () => {
  return (
      <GatedSignin>
        <CreateReport />
      </GatedSignin>
  );
};
export default newReport;
