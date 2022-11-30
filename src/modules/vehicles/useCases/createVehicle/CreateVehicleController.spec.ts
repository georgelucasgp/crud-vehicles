import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Create Vehicle Controller', () => {
  it('should be able to create a new vehicle', async () => {
    const response = await request(app).post('/vehicles').send({
      license_plate: 'AAA-0000',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '1',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to create a new vehicle with license plate already exists', async () => {
    await request(app).post('/vehicles').send({
      license_plate: 'AAA-0000',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '1',
    });

    const response = await request(app).post('/vehicles').send({
      license_plate: 'AAA-0000',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '1',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
});
