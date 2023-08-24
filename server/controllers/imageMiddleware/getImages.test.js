const { isWebTarget } = require('webpack-dev-server');
const imageController = require('/root/src/Art-Gallery/server/controllers/imageMiddleware/getImages.js');
const db = require('/root/src/Art-Gallery/server/db.js');


//Create a mock db to use for the test
jest.mock('/root/src/Art-Gallery/server/db.js', () => ({
  query: jest.fn(),
}));

//The entire testing function for the entirety of the image controller
describe('imageController', () => {
  //Specifically testing get images in the image controller
  describe('getImages', () => {
    //Specifically tests the functionality to grab images and set them into res,locals
    it('should retrieve images from the database and set them in res.locals', async () => {
      //Fake objects to mock
      const fakeObj = {
        userId: 1,
        title: 'mona',
      };
      const fakeObj2 = {
        userId: 2,
        title: 'lisa',
      };
      //Create a mock array based on the grabbed rows
      const mockImages = [fakeObj, fakeObj2];
      db.query.mockResolvedValueOnce({ rows: mockImages });

      //Create a set of mock variables based specifically on req, res, and next
      const mockReq = {};
      const mockRes = { locals: {} };
      const mockNext = jest.fn();

      //The actual function call and passed in variables
      await imageController(mockReq, mockRes, mockNext);

      //Check to ensure the function is successfully called, and with the specific argument
      expect(db.query).toHaveBeenCalledWith('SELECT * FROM images');
      //Recursively compares all properties to determine a deep equality between the mock and locals
      expect(mockRes.locals.images).toEqual(mockImages);
      //Checks to make sure that the next property has been called
      expect(mockNext).toHaveBeenCalled();
    });
    //Emulate the catch portion of the function
    it('Should catch and handle any error ', async () => {
      //Make a mock error
      const mockError = new Error('Database error');
      db.query.mockRejectedValueOnce(mockError);

      //mock variables
      const mockReq = {};
      const mockRes = { locals: {} };
      const mockNext = jest.fn();
      //Running the actual function
      await imageController(mockReq, mockRes, mockNext);
      //Expected results of the function to have been run with the error message
      expect(mockNext).toHaveBeenCalledWith({
        log: expect.stringContaining('imageControllers.getImages: ERROR:'),
        status: 400,
        message: expect.any(Object),
      });
    });
  });
});
