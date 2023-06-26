const express = require("express");
const cors = require("cors");

const logger = require("./loaders/logger");
const ethers = require("./loaders/ethers");
const mongo = require("./loaders/mongo");
const loggerMiddleware = require("./middlewares/logger");

const app = express();

app.use(loggerMiddleware.new(logger));
app.use(cors());
app.use(express.json());

const collectionRouter = require("./loaders/collectionRouter");

app.use("/api/v1", collectionRouter);

app.get("/healthcheck", (req, res) => {
  res.send("OK");
});

app.get("/getBalance/:address", async (req, res) => {
  const { address } = req.params;

  const balance = await ethers.getBalance(address);

  res.send({ balance: balance.toString() });
});

app.listen(4000, () => {
  logger.info("Server is listening on port 4000");
});
