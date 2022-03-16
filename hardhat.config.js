require('hardhat-deploy');
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { LOCALHOST_PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "localhost",
   namedAccounts: {
   deployer: 0
 },
   networks: {
      hardhat: {
         chainId: 1337
      },
      localhost: {
         url: "HTTP://127.0.0.1:7545",
         accounts: [LOCALHOST_PRIVATE_KEY]
      }
   },
}