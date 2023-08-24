const dbBase = require('../../db');
const authController = require('../authController.js');

authController.logout = async function (req, res, next, db = dbBase) {
  const cookies = req.cookies;
  try {
    if (!cookies?.jwt) return res.sendStatus(204);
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.clearCookie('id', { httpOnly: true, sameSite: 'None', secure: true });
    return next();
  } catch (err) {
    return next({
      log: `authController.logout ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with logout',
      },
    });
  }
};

module.exports = authController.logout;
