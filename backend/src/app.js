const http = require("http");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const mongo = require("./loaders/mongo");
const logger = require("./loaders/logger");
const loggerMiddleware = require("./middlewares/logger");
const errorMiddleware = require("./middlewares/error");

const healthcheckRouter = require("./loaders/healthcheckRouter");
const collectionRouter = require("./loaders/collectionRouter");
const userRouter = require("./loaders/userRouter");

const main = () => {
  const app = express();

  app.use(loggerMiddleware.requestLogger(logger));
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
      methods: ["GET", "POST", "OPTIONS"],
    })
  );
  app.use(express.json());
  app.use(cookieParser());

  app.use("/api/v1", healthcheckRouter);
  app.use("/api/v1", collectionRouter);
  app.use("/api/v1", userRouter);

  app.use(errorMiddleware.pageNotFound);
  app.use(errorMiddleware.handleError(logger));

  return app;
};

const server = http.createServer(main());

server.listen(4000, () => {
  logger.info("HTTP server listening on port 4000");
});

const gracefulShutdown = () => {
  logger.info("SIGTERM signal received: shutdown process initiated");
  server.close(() => {
    logger.info("HTTP server closed");
    mongo.disconnect();
    logger.info("MongoDB disconnected");
    process.exit(0);
  });
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
