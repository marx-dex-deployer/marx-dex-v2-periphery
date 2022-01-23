# MarX Decentralized Exchange

[![Actions Status](https://github.com/marx-dex-deployer/marx-dex-v2-periphery/workflows/CI/badge.svg)](https://github.com/marx-dex-deployer/marx-dex-v2-periphery/actions)
[![npm](https://img.shields.io/npm/v/@marx-dex/marx-dex-v2-periphery?style=flat-square)](https://npmjs.com/package/@marx-dex/marx-dex-v2-periphery)

The built contract artifacts can be browsed via [unpkg.com](https://unpkg.com/browse/@marx-dex/marx-dex-v2-periphery@latest/).

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

## Run scripts

`truffle exec scripts/approve_weth.js --network evmos`
`truffle exec scripts/add_liquidity.js --network evmos`

