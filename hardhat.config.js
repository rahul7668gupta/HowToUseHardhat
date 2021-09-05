const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  console.log(accounts);
  // for (const account of accounts) {
  //   console.log(account.address);
  // }
});

task('getArtifact', 'Gets the artifact for desired contract', async (taskArgs, hre) => {
  const artifact = await hre.artifacts.readArtifact('Greeter')
  console.log(artifact);
})

task('balance', 'Prints the account\'s balance')
  .addParam('account', 'The accounts\'s address')
  .setAction(async (taskArgs) => {
    console.log(taskArgs)
  })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
};
