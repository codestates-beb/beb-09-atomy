const mongo = require("mongoose");

const collectionSchema = new mongo.Schema({
  address: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  chain_identifier: {
    type: String,
  },
  name: {
    type: String,
  },
  symbol: {
    type: String,
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
  },
  owner: {
    type: Number,
  },
  image_url: {
    type: String,
  },
  banner_image_url: {
    type: String,
  },
  total_supply: {
    type: Number,
  },
  total_volume: {
    type: Number,
  },
  created_date: {
    type: Date,
  },
});

const model = mongo.model("Collection", collectionSchema);

module.exports = {
  findRandom: async (size) => {
    return await model.aggregate([{ $sample: { size: size } }]);
  },
  findBySlug: async (slug) => {
    return await model.findOne({ slug });
  },
  insertOne: async (collection) => {
    return await model.create(collection);
  },
};
