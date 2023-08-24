const authController = require('../authController.js');
const cookieParser = require('cookie-parser');

authController.setCookie = async function (req, res, next) {
  res.cookie('id', res.locals.id, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 5 * 60 * 1000,
  });
  return next();
};

module.exports = authController.setCookie;
