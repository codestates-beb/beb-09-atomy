const userModel = require("../models/user");
const userService = require("../services/user");
const userController = require("../api/user");

module.exports = new userController(new userService(userModel)).getRouter();
