require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.30",

  networks: {
    coreDaoSepolia: {
      url: `${process.env.CORE_DAO_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`], 
    }
  }
};

export default config;



