const express = require("express");

class collectionController {
  constructor(collectionModel) {
    this.collectionModel = collectionModel;
  }

  getRouter() {
    const router = express.Router();
    router.get("/collections", this.randomCollections.bind(this));
    router.get("/collections/:slug", this.getCollectionBySlug.bind(this));
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
      const { size } = req.query;
      let parsedSize = parseInt(size);
      if (isNaN(parsedSize) || parsedSize < 1 || parsedSize > 200) {
        parsedSize = 100;
      }
      const collections = await this.collectionModel.findRandom(parsedSize);
      res.send(collections);
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  async getCollectionBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const collection = await this.collectionModel.findBySlug(slug);
      res.send(collection);
    } catch (err) {
      res.status(500);
      next(err);
    }
  }
}

module.exports = collectionController;
