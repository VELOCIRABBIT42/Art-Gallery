const signup = require('./authMiddleware/signup');
const hashedLogin = require('./authMiddleware/hashedLogin');
const setCookie = require('./authMiddleware/setCookie');
const refresh = require('./authMiddleware/refresh');
const logout = require('./authMiddleware/logout');

const authController = {
  signup,
  hashedLogin,
  setCookie,
  refresh,
  logout,
};

module.exports = authController;
