const mongo = require("mongoose");

const userSchema = new mongo.Schema({
  address: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
  },
  created_date: {
    type: Date,
  },
  updated_date: {
    type: Date,
  },
});

const model = mongo.model("User", userSchema);

module.exports = {
  findUserByAddress: async (address) => {
    return await model.findOne({ address });
  },
  insertOne: async (user) => {
    return await model.create(user);
  },
  updateOne: async (address, user) => {
    return await model.updateOne({ address }, user);
  },
};
