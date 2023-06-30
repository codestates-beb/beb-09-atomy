const ethers = require("ethers");
const cfg = require("../config/ethers");

const provider = new ethers.JsonRpcProvider(cfg.rpc_url);

module.exports = provider;
