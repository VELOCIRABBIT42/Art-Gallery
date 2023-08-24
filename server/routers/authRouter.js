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
  if (res.locals.loginAttempt) {
    res.status(200).json('Successful Login');
  } else {
    res.status(400).json('Login Error');
  }
});

//Decrypting the jwt.
/*try{
  const decoded = jwt.verify (refreshToken, refreshTokenSecret);
} catach (err){
  console.log('JWT Verification Failed', err)
}
*/

// // POST REQUEST TO REFRESH
authRouter.post('/refresh', authController.refresh, (req, res) => {
  res.status(200).json(res.locals);
});

// // POST REQUEST TO LOGOUT
authRouter.post('/logout', authController.logout, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = authRouter;
