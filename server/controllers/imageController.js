const getImages = require('./imageMiddleware/getImages.js');
const addImage = require('./imageMiddleware/addImage.js');

const imageController = {
  addImage,
  getImages,
};

module.exports = imageController;
