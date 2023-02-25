// const { ethers } = require("hardhat");

// async function main() {
//   const WhitelistContract = await ethers.getContractFactory("Whitelist"); // 获得 whitelist 这个智能合约；

//   const deployedWhitelistContract = await WhitelistContract.deploy(10); // 决定给10位用户白名单

//   await deployedWhitelistContract.deoloyed(); // 等上一步部署完

//   console.log("whitelist contract address", deployedWhitelistContract.address);
// }

// main()
//   .then(() => process.exit(0)) // 无错相安无事
//   .catch((error) => {
//     // 有错就蹦出错误
//     console.error(error);
//     process.exit(1);
//   });
const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
