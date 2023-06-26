const healthcheckController = require("../api/healthcheck");

module.exports = new healthcheckController().getRouter();
