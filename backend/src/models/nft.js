const mongo = require("mongoose");

const nftSchema = new mongo.Schema({
  token_id: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
  },
  traits: {
    type: Array,
  },
  collection: {
    type: Object,
    required: true,
    ref: "Collection",
  },
});

const model = mongo.model("NFT", nftSchema);

module.exports = {
  findNFTsBySlug: async (slug) => {
    return await model.find({ "collection.slug": slug });
  },
  findNFTBySlugAndTokenId: async (slug, token_id) => {
    return await model.findOne({ "collection.slug": slug, token_id });
  },
  findNFTsByOwner: async (owner) => {
    return await model.find({ owner });
  },
  insertOne: async (nft) => {
    return await model.create(nft);
  },
  updateOne: async (slug, token_id, nft) => {
    return await model.updateOne({ "collection.slug": slug, token_id }, nft);
  },
};
