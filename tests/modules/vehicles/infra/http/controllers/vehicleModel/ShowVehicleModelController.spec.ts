/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Show Vehicle Model Controller', () => {
  it('should be able to show a vehicle model', async () => {
    const vehicleModel = await request(app).post('/vehicle-models').send({
      model: 'Gol',
      brand: 'Volkswagen',
      model_year: 2018,
    });
    const response = await request(app).get(`/vehicle-models/${vehicleModel.body.id}/show`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
  it('should not be able to show a vehicle model that does not exists', async () => {
    const response = await request(app).get('/vehicle-models/999/show');

    expect(response.status).toBe(400);
  });
  it('should be able to list all vehicle models', async () => {
    const response = await request(app).get('/vehicle-models');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });
});
