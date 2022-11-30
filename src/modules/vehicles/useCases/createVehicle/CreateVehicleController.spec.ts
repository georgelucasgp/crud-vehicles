/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@shared/infra/http/app';
import request from 'supertest';

describe('Create Vehicle Controller', () => {
  it('should be able to create a new vehicle', async () => {
    const response = await request(app).post('/vehicles').send({
      license_plate: 'CCC-1111',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: 'clax1e0lf00041ilrlsplcn1a',
    });

    console.log(response.body);
  });

  // it('should not be able to create a new vehicle with license plate already exists', async () => {
  //   await request(app).post('/vehicles').send({
  //     license_plate: 'AAA-0000',
  //     chassis: 'ABCDEFG',
  //     renavam: '123456789',
  //     vehicles_model_id: '1',
  //   });

  //   const response = await request(app).post('/vehicles').send({
  //     license_plate: 'AAA-0000',
  //     chassis: 'ABCDEFG',
  //     renavam: '123456789',
  //     vehicles_model_id: '1',
  //   });

  //   expect(response.status).toBe(400);
  //   expect(response.body).toHaveProperty('message');
  // });
});
