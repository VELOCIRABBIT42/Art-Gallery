const express = require('express');
const imageController = require('../controllers/imageController');
const galleryRouter = express.Router();

galleryRouter.get('/', imageController.getImages, (req, res) => {
  res.status(200).json(res.locals.images);
});

galleryRouter.post('/addimage', imageController.addImage, (req, res) => {
  res.status(200).json('image added');
});

module.exports = galleryRouter;
