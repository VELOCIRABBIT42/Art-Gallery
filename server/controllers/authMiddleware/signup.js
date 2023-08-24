const db = require('../../db');
const authController = require('../authController.js');
const bcrypt = require('bcrypt');

authController.signup = async function (req, res, next) {
  // Sanitize input by verifying each expected param exists on request
  // Sanitize input by verifying typeof each param on request
  //{"username: briantest", "password":"1234"}
  try {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    const result = await db.query(query);
    if (result.rows.length > 0) {
      return next({
        log: `authController.signup ERROR: Duplicate username`,
        status: 400,
        message: {
          err: 'Error with username or password',
        },
      });
    } else {
      const date = new Date();
      const hashedPassword = await bcrypt.hash(password, 10);
      const query =
        'INSERT INTO users (username, password, date_created) VALUES ($1, $2, $3)';
      const newUser = await db.query(query, [username, hashedPassword, date]);
      next();
    }
  } catch (err) {
    return next({
      log: `authController.signup ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with username or password',
      },
    });
  }
};

module.exports = authController.signup;
