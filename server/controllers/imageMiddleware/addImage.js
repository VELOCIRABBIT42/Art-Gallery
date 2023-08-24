const imageController = require('../imageController.js');
const db = require('../../db.js');


//p
imageController.addImage = async (req, res, next) => {
  console.log("BODY", req.body);
  const { title, url, description, artist, filter } = req.body;

  const users_user_id = req.cookies.id;

  /*
{"title" : "test", "url" : "test", "description" : "pretty", "artist": "test", "filter": "Sculpture"}
*/

  try {
    const query = `INSERT INTO images (title, url, description, users_user_id, artist, filter)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [title, url, description, users_user_id, artist, filter];
    const results = await db.query(query, values);
    res.locals.newImage = results.rows[0];
    return next();
  } catch (err) {
    return next({
      log: `imageControllers.addImage: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error occured in imageController.addImage. Check logs for more details.',
      },
    });
  }
};

module.exports = imageController.addImage;


// ['Sculptures', ()=> filterImagesByCategory('Sculptures')],
// ['Paintings', ()=> filterImagesByCategory('Paintings')],
// ['Virtual', ()=> filterImagesByCategory('Virtual')],
// ['Modern', ()=> filterImagesByCategory('Modern')],
// ['Landscapes', ()=> filterImagesByCategory('Landscapes')],