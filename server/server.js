const express = require('express');

const app = express();
const PORT = 3000;


const galleryRouter = require('./routes/galleryRouter')



app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Quinn & Sharmarke, let\'s goooooooo!')
// })


app.use('/gallery', galleryRouter, (req, res)=> {
  res.status(200).json(res.locals.images)
});


app.use('/upload', galleryRouter, (req, res)=> {
  res.status(200).json(res.locals.newImage)
});



app.use((req,res) => {
  res.status(404).send('Not found.')
});





app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error.',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});








app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})