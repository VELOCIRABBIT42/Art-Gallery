const db = require('../../db');
const authController = require('../authController.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

// AUTH STORAGE: Stretch: Add to an env
const accessTokenSecret =
  '24c9e42fcac060838120f07ea5460b4c6f8c4b7c137a23c4035a93c594f0b4dd1d932b0e95eeb0422066daa3e521c6353b4f858893a3b80343ab3271d7d79198';
const refreshTokenSecret =
  '16376af783e470b0faf0eafafe36350ca5ec5fff9979bc34397906bfe2bfc53bbb030dc6cceb17285f56bd379ffef9251b3e993e5d6637a8e7c63e7acefe1f81';

authController.refresh = async function (req, res, next) {
  const { username, password } = req.body;
  const cookies = req.cookies;

  if (!cookies.jwt)
    return res
      .status(401)
      .json({ message: ' JWT not provided, has expired, or is missing' });

  const refreshToken = cookies.jwt;
  console.log('refreshToken:', refreshToken);

  try {
    console.log('Issuing refresh token');
    const decoded = jwt.verify(refreshToken, refreshTokenSecret);

    const newAccessToken = jwt.sign(
      {
        UserInfo: {
          username: decoded.username,
          roles: decoded.roles,
        },
      },
      accessTokenSecret,
      { expiresIn: '180s' },
    );
    res.locals.accessToken = newAccessToken;
    return next();
  } catch (error) {
    console.log('Error during token refresh', error);
    return next(error);
  }
};

module.exports = authController.refresh;
