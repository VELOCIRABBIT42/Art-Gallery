const db = require('../../db');
const authController = require('../authController.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

authController.logout = async function (req, res, next, db) {
  const cookies = req.cookies;
  try {
    if (!cookies?.jwt) return res.sendStatus(204);
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.json({ message: 'Cookie cleared' });
  } catch (error) {
    console.log('Error during logout', error);
    return next(error);
  }
};

module.exports = authController.logout;
