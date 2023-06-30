const express = require("express");

class collectionController {
  constructor(collectionModel, nftModel) {
    this.collectionModel = collectionModel;
    this.nftModel = nftModel;
  }

  getRouter() {
    const router = express.Router();
    router.get("/collections", this.randomCollections.bind(this));
    router.get("/collections/:slug", this.getCollectionBySlug.bind(this));
    router.get(
      "/collections/:slug/:token_id",
      this.getNFTBySlugAndTokenId.bind(this)
    );
    router.post("/collections/:slug/drop", this.dropNFT.bind(this));
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
      next(err);
    }
  }

  async getCollectionBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const collection = await this.collectionModel.findBySlug(slug);
      if (!collection) {
        res.status(404);
        throw new Error("Collection not found");
      }

      const nfts = await this.nftModel.findNFTsBySlug(slug);
      res.send({ collection, nfts });
    } catch (err) {
      next(err);
    }
  }

  async getNFTBySlugAndTokenId(req, res, next) {
    try {
      const { slug, token_id } = req.params;
      const nft = await this.nftModel.findNFTBySlugAndTokenId(slug, token_id);
      if (!nft) {
        res.status(404);
        throw new Error("NFT not found");
      }
      res.send(nft);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = collectionController;
