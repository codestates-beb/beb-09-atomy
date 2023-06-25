const express = require("express");
const winston = require("winston");
const loggerMiddleware = require("./middlewares/logger");

const app = express();
const cors = require("cors");

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    // new winston.transports.File({ filename: "combined.log" }),
  ],
  defaultMeta: { service: "backend", timestamp: Date.now() },
});

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware.new(logger));

app.get("/healthcheck", (req, res) => {
  res.send("OK");
});

app.listen(4000, () => {
  logger.info("Server is listening on port 4000");
});
