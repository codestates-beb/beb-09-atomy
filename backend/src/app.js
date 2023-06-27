require("./loaders/mongo");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const logger = require("./loaders/logger");
const loggerMiddleware = require("./middlewares/logger");
const errorMiddleware = require("./middlewares/error");

const healthcheckRouter = require("./loaders/healthcheckRouter");
const collectionRouter = require("./loaders/collectionRouter");
const userRouter = require("./loaders/userRouter");

const main = async () => {
  const app = express();

  app.use(loggerMiddleware.requestLogger(logger));
  app.use(
    cors({
      origin: ["https://localhost:3000"],
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

  app.listen(4000, () => {
    logger.info("Server is listening on port 4000");
  });
};

main();

// const userModel = require("./models/user");

// const test = async () => {
//   const user = await userModel.findUserByAddress(
//     "0x15a88243b4c61ef0071e3527b88873CAF4A334dD"
//   );

//   console.log(user);
// };

// test();
