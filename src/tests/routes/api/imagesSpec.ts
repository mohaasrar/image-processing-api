import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);
describe('Test image resize endpoint responses', () => {
  it('should return an message if any of the parameter missed', async () => {
    const response = await request.get('/api/images');
    expect(response.text).toBe('please enter all parameters');
  });

  it('should return an error message if width is not a number', async () => {
    const response = await request.get(
      '/api/images?fname=fjord&width=200raa&height=200'
    );
    expect(response.text).toBe('width must be number');
  });

  it('should return an error message if height is not number', async () => {
    const response = await request.get(
      '/api/images?fname=fjord&width=200&height=200hj'
    );
    expect(response.text).toBe('height must be number');
  });

  it('should return an error message if filename is wrong ', async () => {
    const response = await request.get(
      '/api/images?fname=fjord676&width=200&height=200'
    );
    expect(response.text).toBe('file name does not exist');
  });

  it('should return a status of 200 if successful', async () => {
    const response = await request.get(
      '/api/images?fname=fjord&width=300&height=300'
    );
    expect(response.status).toBe(200);
  });
});
