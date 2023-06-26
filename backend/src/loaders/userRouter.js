const userController = require("../api/user");

module.exports = new userController().getRouter();
