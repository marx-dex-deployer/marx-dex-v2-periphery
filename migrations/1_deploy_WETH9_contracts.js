const WETH9 = artifacts.require("WETH9");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(WETH9);
};
