require("dotenv").config();

module.exports = {
  environment: process.env.ENVIRONMENT,
  mongo_url: process.env.MONGO_URL,
  db_name: process.env.DB_NAME,
};
