const WETH9 = artifacts.require("WETH9");

module.exports = async function (callback) {
  const network = config.network
  
  if (network != 'evmos') {
    throw new Error('No MarX DEX contracts on this network!')
  }
  
  try {
    const routerAddress = '0x20eA71c29200B89D227086F1C866a4C59441Bdf6'
    const wethAddress = '0x2a55419038102d9B671f031A7B4Fc99F1582d771'
    
    console.log("Approve WETH")
    let wethContract = await WETH9.at(wethAddress)
    await wethContract.approve(routerAddress, '100000000000000000000000')
  }
  catch(error) {
    console.log(error)
  }
  
  callback(`Complete!`)
};
