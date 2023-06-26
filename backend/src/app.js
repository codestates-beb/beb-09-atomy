require("./loaders/mongo");

const express = require("express");
const cors = require("cors");

const logger = require("./loaders/logger");
const loggerMiddleware = require("./middlewares/logger");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(loggerMiddleware.new(logger));
app.use(cors());
app.use(express.json());

const healthcheckRouter = require("./loaders/healthcheckRouter");
const collectionRouter = require("./loaders/collectionRouter");
const userRouter = require("./loaders/userRouter");

app.use("/api/v1", healthcheckRouter);
app.use("/api/v1", collectionRouter);
app.use("/api/v1", userRouter);

app.use(errorMiddleware.pageNotFound);
app.use(errorMiddleware.handleError(logger));

app.listen(4000, () => {
  logger.info("Server is listening on port 4000");
});
