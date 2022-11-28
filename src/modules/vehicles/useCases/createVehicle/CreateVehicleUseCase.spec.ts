import { Vehicle } from '@modules/vehicles/entities/Vehicle';
import { VehicleRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleRepositoryInMemory';
import AppError from '@shared/errors/AppError';

import { CreateVehicleUseCase } from './CreateVehicleUseCase';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let createVehicleUseCase: CreateVehicleUseCase;

let vehicleData: Vehicle;

beforeAll(() => {
  vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
  createVehicleUseCase = new CreateVehicleUseCase(vehicleRepositoryInMemory);
});

describe('Create Vehicle', () => {
  it('should be able to create a new vehicle', async () => {
    vehicleData = {
      license_plate: 'AAA-0000',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '1',
    };

    const vehicle = await createVehicleUseCase.execute(vehicleData);

    expect(vehicle).toHaveProperty('id');
  });

  it('should not be able to create a new vehicle with license plate already exists', async () => {
    vehicleData = {
      license_plate: 'AAA-1111',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '1',
    };

    await createVehicleUseCase.execute(vehicleData);

    await expect(createVehicleUseCase.execute(vehicleData)).rejects.toEqual(
      new AppError('Vehicle already Exists', 400),
    );
  });
});
