const express = require("express");

class collectionController {
  constructor(collectionModel) {
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

  async dropNFT(req, res, next) {
    try {
      // TODO: Implement this

      res.send("Not implemented");
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  async randomCollections(req, res, next) {
    try {
      const collections = await this.collectionModel.findRandom();
      res.send(collections);
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  async getCollectionByName(req, res, next) {
    try {
      const { collection_name } = req.params;
      const name = collection_name.toLowerCase().replace(/-/g, " ");
      const collection = await this.collectionModel.findByName(name);
      res.send(collection);
    } catch (err) {
      res.status(500);
      next(err);
    }
  }
}

module.exports = collectionController;
