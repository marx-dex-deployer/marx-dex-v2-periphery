const MarXDEXV2Router02 = artifacts.require("MarXDEXV2Router02");

module.exports = async function (deployer, network, addresses) {
  let factoryAddress = await '0x49c5935d26E9D1D36e27fe16E6f0815260A26E10';
  let wethAddress = await '0x2a55419038102d9B671f031A7B4Fc99F1582d771';
  
  await deployer.deploy(MarXDEXV2Router02, factoryAddress, wethAddress);
};
