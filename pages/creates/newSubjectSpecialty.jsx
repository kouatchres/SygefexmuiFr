import React from "react";
import NewSubjDistro from "../../src/components/subjectSpecialty/NewSubjDistro";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSubjectSpecialty = () => {
  return (
    <div>
      <GatedSignin>
        <NewSubjDistro />
      </GatedSignin>
    </div>
  );
};
export default newSubjectSpecialty;
