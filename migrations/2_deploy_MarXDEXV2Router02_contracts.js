const MarXDEXV2Router02 = artifacts.require("MarXDEXV2Router02");

module.exports = async function (deployer, network, addresses) {
  let factoryAddress = await '0x473475DE8e008267553900617c95191459987299';
  let wethAddress = await '0x7001244E396aF9F3D861be871a33476E30A7B2E2';
  
  await deployer.deploy(MarXDEXV2Router02, factoryAddress, wethAddress);
};
