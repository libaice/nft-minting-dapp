require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require('dotenv').config()

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      accounts: [process.env.PRI_KEY]
    }
  },
  etherscan :{
    apiKey:process.env.ETHERSCAN_KEY
  }
};
