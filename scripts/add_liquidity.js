const IERC20 = artifacts.require("IERC20")
const MarXDEXV2Router02 = artifacts.require("MarXDEXV2Router02")

module.exports = async function (callback) {
  const network = config.network
  
  if (network != 'evmos') {
    throw new Error('No MarX DEX contracts on this network!')
  }
  
  try {
    const overrides = {
      gasLimit: 9999999
    }
    
    const walletAddress = '0x5bD36E5C19bc73AAF4aF377a78aF61eF03912335'
    
    const routerAddress = '0x20eA71c29200B89D227086F1C866a4C59441Bdf6'
    
    const usdcAddress = '0xdcB434b0C8c8c7C6b6b61990B2A87C2c3B1B1F83'
    const daiAddress = '0x60154b6844ED3B8CbD4636244bdE43Bb06a0e68D'
    const marxAddress = '0xD05958358Cf3F211E5419C6Df2B95d44FFE712bD'

    let router = await MarXDEXV2Router02.at(routerAddress)
    
    let daiAmount
    let usdcAmount
    let marxAmount
    let wethAmount
    
    console.log("Add liquidity WETH/DAI")
    
    daiAmount = '747900000000000000000'
    wethAmount = '300000000000000000'
    
    await router.addLiquidityETH(
      daiAddress,
      daiAmount,
      daiAmount,
      wethAmount,
      walletAddress,
      1642952021, {
      ...overrides,
      value: wethAmount
    })
    
    console.log("Add liquidity USDC/DAI")
    
    usdcAmount = '7479000000'
    daiAmount = '747900000000000000000'
    
    await router.addLiquidity(
      usdcAddress,
      daiAddress,
      usdcAmount,
      daiAmount,
      usdcAmount,
      daiAmount,
      walletAddress,
      1642952021
    )
    
  }
  catch(error) {
    console.log(error)
  }
  
  callback(`Complete!`)
};
