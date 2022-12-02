/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Show Vehicle Controller', () => {
  it('should be able to show a vehicle', async () => {
    const vehicleModel = await request(app).post('/vehicle-models').send({
      model: 'FOX',
      brand: 'Volkswagen',
      model_year: 2023,
    });

    const vehicle = await request(app).post('/vehicles').send({
      license_plate: 'CCC-1111',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: vehicleModel.body.id,
    });

    const response = await request(app).get(`/vehicles/${vehicle.body.id}/show`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to show a vehicle that does not exists', async () => {
    const response = await request(app).get('/vehicles/999/show');

    expect(response.status).toBe(400);
  });

  it('should be able to list all vehicle', async () => {
    const response = await request(app).get('/vehicles');

    expect(response.status).toBe(200);
  });
});
