/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Delete Vehicle Controller', () => {
  it('should be able to create a new vehicle', async () => {
    const vehicleModel = await request(app).post('/vehicle-models').send({
      model: 'UNO',
      brand: 'FIAT',
      model_year: 2023,
    });
    const vehicle = await request(app)
      .post('/vehicles')
      .send({
        license_plate: 'DDD-2301',
        chassis: 'ABCDEFG',
        renavam: '123456789',
        vehicles_model_id: vehicleModel.body.id as string,
      });
    const response = await request(app).delete(`/vehicles/${vehicle.body.id}`);
    expect(response.status).toBe(200);
  });
  it('should not be able to delete a vehicle that does not exists', async () => {
    const response = await request(app).delete('/vehicles/999');
    expect(response.status).toBe(400);
  });
});
