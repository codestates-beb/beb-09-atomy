const mongo = require("mongoose");
const logger = require("./logger");
const config = require("../config/mongo");

const connect = async () => {
  try {
    const client = await mongo.connect(config.mongo_url, {
      dbName: config.db_name,
    });
    logger.info("MongoDB connected");
    return client;
  } catch (error) {
    logger.error(error);
  }
};

connect();
