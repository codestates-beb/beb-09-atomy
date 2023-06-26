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
  findRandom: async () => {
    return await model.aggregate([{ $sample: { size: 4 } }]);
  },
  findByName: async (name) => {
    return await model.findOne({ name });
  },
  insertOne: async (collection) => {
    return await model.create(collection);
  },
};
