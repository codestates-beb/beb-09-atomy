# Hardhat Tutorial

## Requirements

1. Node.js
2. npm
3. Hardhat
4. Metamask
5. Alchemy api key
6. etherscan api key (optional)

## 1. setup hardhat project

```sh
$ npm init -y
$ npm install --save-dev hardhat
$ npx hardhat
```

## 2. install hardhat plugin and dependencies

```sh
$ npm install --save-dev @nomicfoundation/hardhat-toolbox
```

## 3. create .env file using .env.example

```
ETHERSCAN_API_KEY=
ALCHEMY_API_KEY=
PRIVATE_KEY=
```

## 4. deploy contract

```sh
$ npx hardhat run scripts/deploy.js --network sepolia
Deploying contracts with the account: 0x965B0E63e00E7805569ee3B428Cf96330DFc57EF
AtomyNFTs deployed to: 0xd81499F6c704D5FCA9B9027baf12a8a1d576a9d1
```

## 5. verify contract

```sh
$ npx hardhat verify --network sepolia 0xd81499F6c704D5FCA9B9027baf12a8a1d576a9d1
Successfully submitted source code for contract
contracts/AtomyNFTs.sol:AtomyNFTs at 0xd81499F6c704D5FCA9B9027baf12a8a1d576a9d1
for verification on the block explorer. Waiting for verification result...

Successfully verified contract AtomyNFTs on the block explorer.
https://sepolia.etherscan.io/address/0xd81499F6c704D5FCA9B9027baf12a8a1d576a9d1#code
```
