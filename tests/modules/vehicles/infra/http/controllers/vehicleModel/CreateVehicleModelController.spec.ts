/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Create Vehicle Model Controller', () => {
  it('should be able to create a new vehicle model', async () => {
    const response = await request(app).post('/vehicle-models').send({
      model: 'Gol',
      brand: 'Volkswagen',
      model_year: 2018,
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
  it('should not be able to create a new vehicle model with name already exists', async () => {
    const response = await request(app).post('/vehicle-models').send({
      model: 'Gol',
      brand: 'Volkswagen',
      model_year: 2018,
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
});
