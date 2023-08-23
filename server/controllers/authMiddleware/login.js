const db = require('../../db');
const authController = require('../authController.js');
const bcrypt = require('bcrypt');

authController.login = async function (req, res, next) {
  // Destructure request body
  // Sanitize input by verifying each expected param exists on request
  // Sanitize input by verifying typeof each param on request
  try {
    // await matchFound passing in req.body.username and req.body.password
    const matchFound = await checkIfInputMatches(
      req.body.username,
      req.body.password,
    );
    if (!matchFound) {
      res.locals.loginAttempt =
        'User denied access: Username or password invalid';
    } else {
      res.locals.loginAttempt = 'User logging in';
      // res.redirect('dashboard'); // Q: What are we calling this?
    }
    return next();
  } catch (error) {
    // Match shape of error to shape of error on server.js
    console.log('error in AuthController.login', error);
    return next(error);
  }
};

async function checkIfInputMatches(username, password) {
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  const result = await db.query(query);
  if (result.rows.length > 0) {
    console.log('Found user which matches the provided username and password');
    return true;
  } else {
    console.log('User with the provided username and password does not exist');
    return false;
  }
}

module.exports = authController.login;
