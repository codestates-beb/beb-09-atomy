const express = require("express");

class collectionController {
  constructor(logger, collectionModel) {
    this.logger = logger;
    this.collectionModel = collectionModel;
  }

  getRouter() {
    const router = express.Router();
    router.get("/collections", this.randomCollections.bind(this));
    router.get(
      "/collections/:collection_name",
      this.getCollectionByName.bind(this)
    );
    router.post("/collections/:collection_name/drop", this.dropNFT.bind(this));
    return router;
  }

  async dropNFT(req, res) {
    const { collection_name } = req.params;

    this.logger.info(`Dropping NFT from ${collection_name}`);

    res.send("Not implemented");
  }

  async randomCollections(req, res) {
    try {
      const collections = await this.collectionModel.findRandom();
      res.send(collections);
    } catch (err) {
      this.logger.error(err);
      res.status(500).send("Internal Server Error");
    }
  }

  async getCollectionByName(req, res) {
    try {
      const { collection_name } = req.params;
      const name = collection_name.toLowerCase().replace(/-/g, " ");
      const collection = await this.collectionModel.findByName(name);
      res.send(collection);
    } catch (err) {
      this.logger.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = collectionController;
