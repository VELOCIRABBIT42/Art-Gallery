
const request = require('supertest');
const express = require('express');
const galleryRouter = require('/root/src/Art-Gallery/server/routers/galleryRouter.js');

const app = express();
app.use('/', galleryRouter);

describe('GET /test', () => {
  it('gets the test endpoint', async () => {
    const response = await request(app).get('/test');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pass!');
  });
});
