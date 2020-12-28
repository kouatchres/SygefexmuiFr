import React from "react";
import CreateSubject from "../../src/components/subject/CreateSubject";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSubject = () => {
  return (
    <div>
      <GatedSignin>
        <CreateSubject />
      </GatedSignin>
    </div>
  );
};
export default newSubject;
