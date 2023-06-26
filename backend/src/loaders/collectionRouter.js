const logger = require("../loaders/logger");
const model = require("../models/collection");
const router = require("../api/collection");

module.exports = new router(logger, model).getRouter();
