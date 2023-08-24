const request = require('supertest');
const express = require('express');
const galleryRouter = require('/root/src/Art-Gallery/server/routers/galleryRouter.js');
const imageController = require('/root/src/Art-Gallery/server/controllers/imageController.js');



//jest galleryRouter.test.js

jest.mock(
  '/root/src/Art-Gallery/server/controllers/imageController.js',
  () => ({
    getImages: jest.fn(),
    addImage: jest.fn(),
  }),
);

const app = express();
app.use('/', galleryRouter);

describe('/root/src/Art-Gallery/server/routers/galleryRouter.js', () => {
  describe('GET /', () => {
    it('should respond with status 200 and images from mocked controller', async () => {
      const mockImages = ['mockedImage1.jpg', 'mockedImage2.jpg'];
      imageController.getImages.mockImplementation((req, res, next) => {
        res.locals.images = mockImages;
        return next();
      });

      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockImages);
      expect(imageController.getImages).toHaveBeenCalled();
    });
  });
});
