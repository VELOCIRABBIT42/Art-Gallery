//const db = require('dbModel/pool') //refactor

const imageController = {};

imageController.getImages = async (req, res, next) => {
    console.log('dans get images controller')
    try {
        // const query =``;
        // const results = await db.query(query);
        // res.locals.images = results.rows;
        res.locals.images = {src:'imgurl'};
        return next();
    } catch (err) {
        next({
            log:`imageControllers.getImages: ERROR: ${err}`,
            message: {err: 'Error occured in imageController.getImage. Check logs for more details.'}
        })
        
    }
}





module.exports = imageController;