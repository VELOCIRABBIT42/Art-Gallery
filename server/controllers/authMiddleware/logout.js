const dbBase = require('../../db');
const authController = require('../authController.js');
const jwt = require('jsonwebtoken');

authController.logout = async function (req, res, next, db = dbBase) {
  const cookies = req.cookies;
  try {
    if (!cookies?.jwt) return res.sendStatus(204);
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.clearCookie('id', { httpOnly: true, sameSite: 'None', secure: true });
    return next();
  } catch (error) {
    console.log('Error during logout', error);
    return next({
      log: `authController.hashedLogin ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with username or password',
      },
    });
  }
};

module.exports = authController.logout;
