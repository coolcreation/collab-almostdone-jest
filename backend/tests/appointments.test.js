import request from 'supertest';
import app from '../app.js'; // assuming you export Express app from app.js

describe('Appointments API', () => {
  it('should return 200 and list appointments', async () => {
    const res = await request(app).get('/appointments');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('appointments');
  });
});
