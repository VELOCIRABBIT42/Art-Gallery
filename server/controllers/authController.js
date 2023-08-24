const signup = require('./authMiddleware/signup');
const hashedLogin = require('./authMiddleware/hashedLogin');
const refresh = require('./authMiddleware/refresh');
const logout = require('./authMiddleware/logout');

const authController = {
  signup,
  hashedLogin,
  refresh,
  logout,
};

module.exports = authController;
