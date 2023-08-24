const dbBase = require('../../db');
const authController = require('../authController.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const accessTokenSecret = process.env.accessTokenSecret;
const refreshTokenSecret = process.env.refreshTokenSecret;

authController.refresh = async function (req, res, next, db = dbBase) {
  // const { username, password } = req.body;
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
          user_id: decoded.user_id,
        },
      },
      accessTokenSecret,
      { expiresIn: '180s' },
    );
    res.locals.accessToken = newAccessToken;
    return next();
  } catch (err) {
    return next({
      log: `authController.refresh ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with refresh',
      },
    });
  }
};

module.exports = authController.refresh;
