const db = require('../db');

// Obj to add middleware methods to
const authController = {};

async function createUser(username, password) {
  const insertQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
  return await db.query(insertQuery, [username, password]);
}

async function checkIfUserExists(username) {
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  const result = await db.query(query);
  if (result.rows.length > 0) {
    console.log('User with the provided username exists');
    return true;
  } else {
    console.log('User with the provided username does not exist');
    return false;
  }
}

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

authController.signup = async function (req, res, next) {
  // Destructure request body
  // Sanitize input by verifying each expected param exists on request
  // Sanitize input by verifying typeof each param on request
  try {
    const userExists = await checkIfUserExists(req.body.username);
    if (!userExists) {
      await createUser(req.body.username, req.body.password);
      console.log('Creating user');
    } else {
      console.log('Will not create user');
    }
    return next();
  } catch (error) {
    // Match shape of error to shape of error on server.js
    console.log('error in AuthController.signup', error);
    return next(error);
  }
}

authController.login = async function (req, res, next) {
  // Destructure request body
  // Sanitize input by verifying each expected param exists on request
  // Sanitize input by verifying typeof each param on request
  try {
    // await matchFound passing in req.body.username and req.body.password
    const matchFound = await checkIfInputMatches(req.body.username, req.body.password);
    if (!matchFound) {
      res.locals.loginAttempt = 'User denied access: Username or password invalid';
    } else {
      res.locals.loginAttempt = "User logging in";
      // res.redirect('dashboard'); // Q: What are we calling this?
    }
    return next();
  } catch (error) {
    // Match shape of error to shape of error on server.js
    console.log('error in AuthController.login', error);
    return next(error)
  }
};

// authController.refresh

// authController.logout

module.exports = authController;