const express = require("express");

class userController {
  constructor(userService) {
    this.userService = userService;
  }

  getRouter() {
    const router = express.Router();
    router.post("/user/login", this.login.bind(this));
    router.post("/user/logout", this.logout.bind(this));
    router.post("/user/refresh", this.refresh.bind(this));
    router.get("/user/profile", this.getProfile.bind(this));

    return router;
  }

  async login(req, res, next) {
    try {
      const { address } = req.body;

      const { user, accessToken, refreshToken } = await this.userService.login(
        address
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 3600000),
        sameSite: "none",
      });

      res.status(200).json({ user, accessToken });
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      res.clearCookie("refreshToken");
      res.status(200).json({ message: "Logout success" });
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      if (!refreshToken) {
        throw new Error("Refresh token not found");
      }

      const { accessToken, refreshToken: newRefreshToken } =
        await this.userService.refresh(refreshToken);

      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 3600000),
        sameSite: "none",
      });

      res.status(200).json({ accessToken });
    } catch (err) {
      res.status(401);
      next(err);
    }
  }

  async validate(req, res, next) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        throw new Error("Authorization header not found");
      }

      const authType = authorization.split(" ")[0];
      const accessToken = authorization.split(" ")[1];

      if (authType !== "Bearer") {
        throw new Error("Invalid authorization type");
      }

      if (!accessToken) {
        throw new Error("Access token not found");
      }

      const valid = this.userService.validate(accessToken);
      if (!valid) {
        throw new Error("Invalid access token");
      }

      next();
    } catch (err) {
      res.status(401);
      next(err);
    }
  }

  async getProfile(req, res, next) {
    const { address } = req.body;

    try {
      const user = await this.userService.userProfile(address);
      res.status(200).json(user);
    } catch (err) {
      res.status(500);
      next(err);
    }
  }
}

module.exports = userController;
