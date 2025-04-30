// backend/tests/api.test.js
import request from 'supertest';
const app = require('../app'); // Your Express or server app

describe('GET /appointments', () => {
  it('should return a list of appointments', async () => {
    const res = await request(app).get('/appointments');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('appointments');
  });
});
