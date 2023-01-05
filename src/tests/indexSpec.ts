import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test main api endpoint responses', () => {
  it('gets api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
