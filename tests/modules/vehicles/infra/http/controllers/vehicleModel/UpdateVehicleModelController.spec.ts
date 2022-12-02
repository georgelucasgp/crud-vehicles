/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Update Vehicle Model Controller', () => {
  it('should be able to update a vehicle model', async () => {
    const vehicleModel = await request(app).post('/vehicle-models').send({
      model: 'Gol',
      brand: 'Volkswagen',
      model_year: 2018,
    });

    const response = await request(app).put(`/vehicle-models/${vehicleModel.body.id}`).send({
      model: 'Celta',
      brand: 'Volkswagen',
      model_year: 2015,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to update a vehicle model that does not exists', async () => {
    const response = await request(app).put('/vehicle-models/999').send({
      model: 'Gol',
      brand: 'Volkswagen',
      model_year: 2019,
    });

    expect(response.status).toBe(400);
  });
});
