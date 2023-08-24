const imageController = require('../imageController.js');
const dbBase = require('../../db.js');

imageController.getImages = async (req, res, next, db = dbBase) => {
  try {
    const query = `SELECT * FROM images`;
    const results = await db.query(query);
    res.locals.images = results.rows;
    return next();
  } catch (err) {
    return next({
      log: `imageControllers.getImages: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error occured in imageController.getImage. Check logs for more details.',
      },
    });
  }
};

module.exports = imageController.getImages;
