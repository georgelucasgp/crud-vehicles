/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Delete Vehicle Model Controller', () => {
  it('should be able to delete a vehicle model', async () => {
    const vehicleModel = await request(app).post('/vehicle-models').send({
      model: 'Gol',
      brand: 'Volkswagen',
      model_year: 2018,
    });

    const response = await request(app).delete(`/vehicle-models/${vehicleModel.body.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to delete a vehicle model that does not exists', async () => {
    const response = await request(app).delete('/vehicle-models/999');

    expect(response.status).toBe(400);
  });
});
