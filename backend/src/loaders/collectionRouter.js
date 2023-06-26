const model = require("../models/collection");
const collectionController = require("../api/collection");

module.exports = new collectionController(model).getRouter();
