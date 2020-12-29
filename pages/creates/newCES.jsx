import React from "react";
import CESRegistration from "../../src/components/centerExamSession/CESRegistration";
import GatedSignin from "../../src/components/user/GatedSignin";

function newCES() {
  return (
    <GatedSignin>
      <CESRegistration />
    </GatedSignin>
  );
}
export default newCES;
