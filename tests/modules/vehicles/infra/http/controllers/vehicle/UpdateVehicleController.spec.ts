/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Update Vehicle Controller', () => {
  it('should be able to update a vehicle', async () => {
    const vehicleModel = await request(app).post('/vehicle-models').send({
      model: 'UNO',
      brand: 'FIAT',
      model_year: 2023,
    });
    const vehicle = await request(app).post('/vehicles').send({
      license_plate: 'EEE-1020',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: vehicleModel.body.id,
    });
    const response = await request(app).put(`/vehicles/${vehicle.body.id}`).send({
      license_plate: 'ABC-123',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: vehicleModel.body.id,
    });
    expect(response.status).toBe(200);
    expect(response.body.license_plate).toBe('ABC-123');
  });
  it('should not be able to update a vehicle that does not exists', async () => {
    const response = await request(app).put('/vehicles/999').send({
      license_plate: 'DDD-2301',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '999',
    });
    expect(response.status).toBe(400);
  });
});
