import React from "react";
import Attendance from "../../src/components/attendance/Attendance";
import GatedSignin from "../../src/components/user/GatedSignin";

const newAttendance = () => {
  return (
    <GatedSignin>
      <Attendance />
    </GatedSignin>
  );
};
export default newAttendance;
