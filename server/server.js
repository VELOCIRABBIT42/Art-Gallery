const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const authRouter = require('./routers/authRouter');

app.use(express.json());

// Define auth route handler
app.use('/auth', 
  (req, res, next) => {
    console.log('routed to /auth');
    return next();
  },
  authRouter
);

app.get('/', (req, res) => {
  res.send('Quinn & Sharmarke, let\'s goooooooo!')
})

// Catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

// Error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

module.exports = app;