const signup = require('./authMiddleware/signup');
const login = require('./authMiddleware/login');
const setCookie = require('./authMiddleware/setCookie');
const refresh = require('./authMiddleware/refresh');
const logout = require('./authMiddleware/logout');

const authController = {
  signup,
  login,
  setCookie,
  refresh,
  logout,
};

module.exports = authController;
