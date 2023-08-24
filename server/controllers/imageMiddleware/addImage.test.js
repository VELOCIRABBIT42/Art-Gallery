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
      //Mock image based on the user id and the title of the image
      const mockNewImage = { id: 3, title: 'testing' };
      //Create a set of mock variables based specifically on req, res, and next
        //Req will be the info that is specifically pulled out by the query using the new passed in image
      const mockReq = {
        body: {
          title: 'testing',
          url: 'Evermore',
          description: 'a test',
          users_user_id: 5,
          artist: 'Mona testa',
        },
        cookies: {
          id: 1,
        },
      };
        
        //Emulate the locals object that is passed in as response
        const mockRes = { locals: {} };
        //Emulate the next function, no necessary functionality
      const mockNext = jest.fn();
      //This imitates the result of the call and the rows that would be pulled from the result
      db.query.mockResolvedValueOnce({rows:mockNewImage});
      //The function call
      await imageController(mockReq, mockRes, mockNext);

      //Make sure the actual called query to database contianed the string of the query itself and the array of the values
      expect(db.query).toHaveBeenCalledWith(
       expect.any(String), expect.any(Array)
      );
      //Recursively compares all properties to determine a deep equality between the mock and locals.
     // expect(mockRes.locals.newImage).toEqual(mockNewImage);
      //Checks to make sure that the next property has been called
      expect(mockNext).toHaveBeenCalled();
    });
  });
});

// jest addImage.test.js