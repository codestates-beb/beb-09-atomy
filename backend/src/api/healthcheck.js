const express = require("express");

class healthcheckController {
  constructor() {}

  getRouter() {
    const router = express.Router();
    router.get("/healthcheck", this.healthcheck.bind(this));
    return router;
  }

  healthcheck(req, res) {
    res.status(200).send("OK");
  }
}

module.exports = healthcheckController;
