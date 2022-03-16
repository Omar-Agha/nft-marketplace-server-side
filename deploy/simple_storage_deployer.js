module.exports = async ({getNamedAccounts, deployments}) => {
   const {deploy} = deployments;
   const {deployer} = await getNamedAccounts();
   await deploy('SimpleStorage', {
     from: deployer,
     args: ["hi there"],
     log: true,
   });
 };
 module.exports.tags = ['SimpleStorage'];