const express = require('express');
const imageController = require('../controllers/imageController');
const galleryRouter = express.Router();

galleryRouter.get('/', imageController.getImages, (req, res) => {
  // console.log('res.locals.images', res.locals.images);
  res.status(200).json(res.locals.images);
});

galleryRouter.post('/addimage', imageController.addImage, (req, res) => {
  // console.log('res.locals.newImage', res.locals.newImage);
  res.status(200).json('image added');
});

module.exports = galleryRouter;
