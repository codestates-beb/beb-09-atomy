require("dotenv").config();

module.exports = {
  environment: process.env.ENVIRONMENT,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
};
