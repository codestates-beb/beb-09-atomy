const logger = require("../loaders/logger");
const model = require("../models/collection");
const collectionController = require("../api/collection");

module.exports = new collectionController(logger, model).getRouter();
