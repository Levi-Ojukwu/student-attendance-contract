import { ethers } from "hardhat";

async function main() {
  console.log("Starting deployment...");

  const StudentAttendance = await ethers.getContractFactory("StudentAttendance");

  const studentAttendance = await StudentAttendance.deploy();

  // Wait for the deployment to be mined
  await studentAttendance.waitForDeployment?.(); // TypeScript may need this
  // Or in Hardhat 2.x with ethers 6, just await deploy:
  // await studentAttendance.deployed();

  console.log("StudentAttendance deployed to:", studentAttendance.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
