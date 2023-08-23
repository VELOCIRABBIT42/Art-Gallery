const express = require('express');
//rename Router
const authRouter = express.Router();
const authController = require('../controllers/authController');
const cookieParser = require('cookie-parser');

authRouter.use(cookieParser());

// POST REQUEST TO SIGN-UP, DATABASE MIDDLEWARE
authRouter.post('/signup', authController.signup, (req, res) => {
  res.sendStatus(200);
});

// POST REQUEST TO LOG IN, DATABASE MIDDLEWARE
// authRouter.post('/login', authController.login, (req, res) => {
//   res.status(200).json(res.locals.loginAttempt);
// });

// POST REQUEST TO HASHED LOGIN
authRouter.post('/hashedLogin', authController.hashedLogin, (req, res) => {
  //if conditional
  //if res.locals.success = true send 200
  //else send 400
  res.status(200).json(res.locals);
});

// // POST REQUEST TO REFRESH
authRouter.post('/refresh', authController.refresh, (req, res) => {
  res.status(200).json(res.locals);
});

// // POST REQUEST TO LOGOUT
authRouter.post('/logout', authController.logout, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = authRouter;
