const authController = require('../authController.js');
const cookieParser = require('cookie-parser');

authController.setCookie = async function (req, res, next) {
  try {
    res.cookie('id', res.locals.id, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 5 * 60 * 1000,
    });
    return next();
  } catch (err) {
    return next({
      log: `authController.setCookie ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with cookkie',
      },
    });
  }
};

module.exports = authController.setCookie;
