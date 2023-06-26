module.exports = {
  pageNotFound: (req, res, next) => {
    res.status(404);
    next(err);
  },
  handleError: (logger) => {
    return (err, req, res, next) => {
      logger.error(err.stack, {
        method: req.method,
        hostname: req.hostname,
        url: req.url,
        status: res.statusCode || 500,
      });
      res
        .status(res.statusCode || 500)
        .json(
          res.statusCode === 404
            ? { error: "Page not found" }
            : { error: err.message }
        );
    };
  },
};
