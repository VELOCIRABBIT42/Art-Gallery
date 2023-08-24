const dbBase = require('../../db');
const authController = require('../authController.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const accessTokenSecret = process.env.accessTokenSecret;
const refreshTokenSecret = process.env.refreshTokenSecret;

authController.login = async function (req, res, next, db = dbBase) {
  const { username, password } = req.body;
  // if (accessTokenSecret) console.log('Incorect import');
  // if (refreshTokenSecret) console.log('Incorect import');
  try {
    const user = await db.query(
      `SELECT * FROM users WHERE username = '${username}'`,
    );
    const id = user.rows[0].user_id;
    res.locals.id = id;

    if (user.rows.length > 0) {
      const match = await bcrypt.compare(password, user.rows[0].password);
      res.locals.loginAttempt = true;
    } else {
      res.locals.loginAttempt = false;
      return next();
    }

    //executes if a username and password match the database
    //set loginAttempt to true to send the correct response

    // JWT
    const payload = {
      user_id: id,
      username: username,
    };

    //saving an accessToken in memory, could move cookie functionality to a new file/middleware
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: '180s',
    });

    //sending a refreshToken to the client as a cookie
    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: '300s',
    });

    res.cookie('jwt', refreshToken, {
      httpOnly: true, // Only accessible by a web server
      secure: true, //https
      sameSite: 'None',
      maxAge: 5 * 60 * 1000,
    });

    return next();
  } catch (err) {
    return next({
      log: `authController.login ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with username or password',
      },
    });
  }
};

module.exports = authController.login;
