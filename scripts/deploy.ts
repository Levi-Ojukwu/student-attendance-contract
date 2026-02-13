import { ethers } from "hardhat";

async function main() {
  console.log("Starting deployment...");

  const StudentAttendance = await ethers.getContractFactory("StudentAttendance");

  const studentAttendance = await StudentAttendance.deploy();

  await studentAttendance.waitForDeployment?.();
  
  console.log("StudentAttendance deployed to:", studentAttendance.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
