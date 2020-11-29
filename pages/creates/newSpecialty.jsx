import React from "react";
import NewSpecialty from "../../src/components/specialty/NewSpecialty";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSeries = () => {
  return (
    <div>
      <GatedSignin>
        <NewSpecialty />
      </GatedSignin>
    </div>
  );
};
export default newSeries;
