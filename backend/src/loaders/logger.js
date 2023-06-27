const winston = require("winston");

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
  defaultMeta: { service: "backend", timestamp: Date.now() },
});

module.exports = logger;
