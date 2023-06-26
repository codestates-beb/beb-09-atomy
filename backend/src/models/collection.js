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
  description: {
    type: String,
  },
  owner: {
    type: String,
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
});

module.exports = mongo.model("Collection", collectionSchema);
