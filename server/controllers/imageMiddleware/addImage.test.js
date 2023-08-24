const { isWebTarget } = require('webpack-dev-server');
const imageController = require('/root/src/Art-Gallery/server/controllers/imageMiddleware/addImage.js');
const db = require('/root/src/Art-Gallery/server/db.js');

//Mock database to provide testing abilities
jest.mock('/root/src/Art-Gallery/server/db.js', () => ({
  query: jest.fn(),
}));

//Testing path for the main function
describe('imageController', () => {
  //Testing path for the add image
  describe('addImage', () => {
    it('Should grab the images and set them to res.locals', async () => {
      //Fake objects to mock
     values=[title, url,]
      //Create a mock array based on the grabbed rows
      const mockImages = [fakeObj, fakeObj2];
      db.query.mockResolvedValueOnce({ rows: mockImages });

      //Create a set of mock variables based specifically on req, res, and next
      const mockReq = {};
      const mockRes = { locals: {} };
      const mockNext = jest.fn();

      //The function call
      await imageController(mockReq, mockRes, mockNext);

      //Check to ensure the function is successfully called, and with the specific argument
      expect(db.query).toHaveBeenCalledWith(
        'INSERT INTO images (title, url, description, users_user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      );
      //Recursively compares all properties to determine a deep equality between the mock and locals
      expect(mockRes.locals.images).toEqual(mockImages[0]);
      //Checks to make sure that the next property has been called
      expect(mockNext).toHaveBeenCalled();
    });
  });
});
