// IMPORTS AND REQUIREMENTS ================================
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const signup = require('./authMiddleware/signup');
const hashedLogin = require('./authMiddleware/hashedLogin');
const refresh = require('./authMiddleware/refresh');
const logout = require('./authMiddleware/logout');

// OBJ TO ADD MIDDLEWARE METHODS TO =========================
const authController = {
  signup,
  hashedLogin,
  refresh,
  logout,
};

// HELPER FUNCTIONS ========================================

// METHODS ==================================================

module.exports = authController;
