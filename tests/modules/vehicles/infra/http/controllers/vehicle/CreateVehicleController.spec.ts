/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Create Vehicle Controller', () => {
  it('should be able to create a new vehicle', async () => {
    const vehicleModel = await request(app).post('/vehicle-models').send({
      model: 'GOLF',
      brand: 'Volkswagen',
      model_year: 2023,
    });
    const response = await request(app).post('/vehicles').send({
      license_plate: 'CCC-1111',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: vehicleModel.body.id,
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
  it('should not be able to create a new vehicle with license plate already exists', async () => {
    const response = await request(app).post('/vehicles').send({
      license_plate: 'CCC-1111',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '102030',
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
  it('should not be able to create a new vehicle with vehicle model does not exists', async () => {
    const response = await request(app).post('/vehicles').send({
      license_plate: 'DDD-5555',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '123',
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
});
