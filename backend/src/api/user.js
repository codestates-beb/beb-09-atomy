const express = require("express");

class userController {
  constructor(userModel) {
    this.userModel = userModel;
  }

  getRouter() {
    const router = express.Router();

    return router;
  }

  async login(req, res, next) {
    try {
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  async validate(req, res, next) {
    try {
    } catch (err) {
      res.status(500);
      next(err);
    }
  }
}

module.exports = userController;
