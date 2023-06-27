const jwt = require("jsonwebtoken");
const cfg = require("../config/jwt");

class userService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  tokenPair(user) {
    const accessToken = jwt.sign(user, cfg.access_token_secret, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(user, cfg.refresh_token_secret, {
      expiresIn: "1h",
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  verifyAccessToken(accessToken) {
    return jwt.verify(accessToken, cfg.access_token_secret);
  }

  verifyRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, cfg.refresh_token_secret);
  }

  async login(address) {
    try {
      let userData = await this.userModel.findUserByAddress(address);
      if (!userData) {
        userData = await this.userModel.insertOne({
          address: address,
          name: "unnamed",
          created_date: new Date(),
          updated_date: new Date(),
        });
      }

      const user = {
        address: userData.address,
        name: userData.name,
        created_date: userData.created_date,
        updated_date: userData.updated_date,
      };

      const { accessToken, refreshToken } = this.tokenPair(user);

      return { user, accessToken, refreshToken };
    } catch (error) {
      throw error;
    }
  }

  async validate(accessToken) {
    try {
      const data = this.verifyAccessToken(accessToken);
      if (!data) {
        throw new Error("Invalid access token");
      }

      const userData = await this.userModel.findUserByAddress(data.address);
      if (!userData) {
        throw new Error("User not found");
      }

      return true;
    } catch (error) {
      throw error;
    }
  }

  async refresh(refreshToken) {
    try {
      const data = this.verifyRefreshToken(refreshToken);
      if (!data) {
        throw new Error("Invalid refresh token");
      }

      const userData = await this.userModel.findUserByAddress(data.address);
      if (!userData) {
        throw new Error("User not found");
      }

      const user = {
        address: userData.address,
        name: userData.name,
        created_date: userData.created_date,
        updated_date: userData.updated_date,
      };

      const { accessToken, refreshToken: newRefreshToken } =
        this.tokenPair(user);

      return { accessToken, refreshToken: newRefreshToken };
    } catch (error) {
      throw error;
    }
  }

  async userProfile(address) {
    try {
      const userData = await this.userModel.findUserByAddress(address);
      if (!userData) {
        throw new Error("User not found");
      }

      const user = {
        address: userData.address,
        name: userData.name,
        created_date: userData.created_date,
        updated_date: userData.updated_date,
      };

      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = userService;
