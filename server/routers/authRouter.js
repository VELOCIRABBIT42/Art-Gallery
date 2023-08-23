const express = require('express');
//rename Router
const authRouter = express.Router();
const authController = require('../controllers/authController');
const cookieParser = require('cookie-parser');

authRouter.use(cookieParser());

// POST REQUEST TO SIGN-UP, DATABASE MIDDLEWARE
authRouter.post('/signup',
  (req, res, next) => {
    console.log('routed to /signup');
    return next();
  },
  authController.signup, (req, res) =>{
  res.sendStatus(200);
});

// POST REQUEST TO LOG IN, DATABASE MIDDLEWARE
authRouter.post('/login',
  (req, res, next) => {
    console.log('routed to /login');
    return next();
  },
  authController.login, (req, res) => {
  res.status(200).json(res.locals.loginAttempt);
});

// POST REQUEST TO HASHED LOGIN
authRouter.post('/hashedLogin',
  (req, res, next) => {
    console.log('routed to /hashedLogin');
    return next();
  },
  authController.hashedLogin, (req, res) => {
  res.status(200).json(res.locals);
});

// // POST REQUEST TO REFRESH
authRouter.post('/refresh',
  (req, res, next) => {
    console.log('routed to /refresh');
    return next();
  },
  authController.refresh, (req, res) => {
  res.status(200).json(res.locals);
});


// // POST REQUEST TO LOGOUT
authRouter.post('/logout',
  (req, res, next) => {
    console.log('routed to /logout');
    return next();
  },
  authController.logout, (req, res) => {
  res.status(200).json(res.locals);
});


module.exports = authRouter;