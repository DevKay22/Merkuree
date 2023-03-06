require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "goerli",
  paths: {
    artifacts:"./src/artifacts",
  },
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/MZ2jmU8-zo_Gdqk5NcEDLvP2Yx1fyeS7",
      accounts: ["83a5d95c84c9dcc48770ccc5b741e36da46d68f435ff27d646408d44065412b6"]
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }}