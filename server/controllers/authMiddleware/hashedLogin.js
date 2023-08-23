const db = require('../../db');
const authController = require('../authController.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

// AUTH STORAGE: Stretch: Add to an env
const accessTokenSecret = process.env.accessTokenSecret;
//   '24c9e42fcac060838120f07ea5460b4c6f8c4b7c137a23c4035a93c594f0b4dd1d932b0e95eeb0422066daa3e521c6353b4f858893a3b80343ab3271d7d79198';
const refreshTokenSecret = process.env.refreshTokenSecret;
//   '16376af783e470b0faf0eafafe36350ca5ec5fff9979bc34397906bfe2bfc53bbb030dc6cceb17285f56bd379ffef9251b3e993e5d6637a8e7c63e7acefe1f81';

authController.hashedLogin = async function (req, res, next) {
  const { username, password } = req.body;
  try {
    const user = await db.query(
      `SELECT * FROM users WHERE username = '${username}'`,
    );
    if (user.rows.length > 0) {
      const match = await bcrypt.compare(password, user.rows[0].password);
      console.log('match', match);
      if (match) {
        console.log('Hashed login successful');
        res.locals.loginAttempt = match;
        // JWT
        const accessToken = jwt.sign(
          {
            UserInfo: {
              username: user.username,
              roles: user.roles,
            },
          },
          accessTokenSecret,
          { expiresIn: '180s' },
        );

        const refreshToken = jwt.sign(
          {
            UserInfo: {
              username: user.username,
              roles: user.roles,
            },
          },
          refreshTokenSecret,
          { expiresIn: '300s' },
        );

        res.cookie('jwt', refreshToken, {
          httpOnly: true, // Only accessible by a web server
          secure: true, //https
          sameSite: 'None',
          maxAge: 5 * 60 * 1000,
        });

        res.locals.accessToken = accessToken;
      } else {
        console.log('Invalid password');
        res.locals.loginAttempt = match;
      }
      return next();
    } else {
      console.log('User not found');
      res.locals.loginAttempt = false;
      return next();
    }
  } catch (err) {
    return next({
      log: `authController.hashedLogin ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with username or password',
      },
    });
  }
};

module.exports = authController.hashedLogin;
