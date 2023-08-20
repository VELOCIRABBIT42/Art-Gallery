const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST REQUEST TO SIGN-UP, DATABASE MIDDLEWARE
router.post('/signup', 
  (req, res, next) => {
    console.log('routed to /signup');
    return next();
  },
  authController.signup, (req, res) =>{
  res.sendStatus(200);
});

// POST REQUEST TO LOG IN, DATABASE MIDDLEWARE
router.post('/login',
  (req, res, next) => {
    console.log('routed to /login');
    return next();
  },
  authController.login, (req, res) => {
  res.status(200).json(res.locals.loginAttempt);
});

// POST REQUEST TO 

module.exports = router;