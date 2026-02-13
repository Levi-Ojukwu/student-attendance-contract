// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StudentAttendanceModule = buildModule("StudentAttendanceModule", (m) => {


  const lock = m.contract("StudentAttendance");

  return { lock };
});

export default StudentAttendanceModule;



