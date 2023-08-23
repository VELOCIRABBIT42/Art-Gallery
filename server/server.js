const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const authRouter = require('./routers/authRouter');
const galleryRouter = require('./routers/galleryRouter');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

app.use('/art/auth', authRouter);

app.use('/art/gallery', galleryRouter);

app.use('*', (req, res) => {
  res.status(404).send('Not found.');
});

// Error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error.',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

/**
 * ask about *, and proxy server purpose, ask about static
 */
