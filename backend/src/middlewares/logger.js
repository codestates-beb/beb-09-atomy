const loggerMiddleware = {
  new: (logger) => {
    return (req, res, next) => {
      let start = Date.now();

      next();

      let duration = Date.now() - start;
      logger.info("Request handled", {
        method: req.method,
        hostname: req.hostname,
        url: req.url,
        duration: duration.toString() + "ms",
      });
    };
  },
};

module.exports = loggerMiddleware;
