const collectionModel = require("../models/collection");
const nftModel = require("../models/nft");
const collectionController = require("../api/collection");

module.exports = new collectionController(
  collectionModel,
  nftModel
).getRouter();
