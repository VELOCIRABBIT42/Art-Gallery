const imageController = require('../imageController.js');
const db = require('../../db.js');

//p
imageController.addImage = async (req, res, next, db = db) => {
  const { title, url, description, users_user_id, artist, filter } = req.body;

  // const users_user_id = cookie.parse(id);

  /*
{"title" : "test", "url" : "test", "description" : "pretty", "users_user_id" : "1"}
*/

  try {
    const query = `INSERT INTO images (title, url, description, users_user_id, artist, filter)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [title, url, description, users_user_id, artist, filter];
    const results = await db.query(query, values);
    res.locals.newImage = results.rows[0];
    console.log('RESULTS ROWS', results.rows);
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
