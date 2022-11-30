import { VehicleModel } from '@modules/vehicleModel/entities/VehicleModel';
import { VehicleModelRepositoryInMemory } from '@modules/vehicleModel/repositories/in-memory/VehicleModelRepositoryInMemory';

import CreateVehicleModelUseCase from './CreateVehicleModelUseCase';

let vehicleModelRepositoryInMemory: VehicleModelRepositoryInMemory;
let createVehicleModelUseCase: CreateVehicleModelUseCase;

let vehicleModelData: VehicleModel;

beforeAll(() => {
  vehicleModelRepositoryInMemory = new VehicleModelRepositoryInMemory();
  createVehicleModelUseCase = new CreateVehicleModelUseCase(
    vehicleModelRepositoryInMemory,
  );
});

describe('Create Vehicle Model Use Case', () => {
  vehicleModelData = {
    model: 'Gol',
    brand: 'Volkswagen',
    model_year: 2023,
  };
  it('should be able to create a new vehicle Model', async () => {
    const vehicleModel = await createVehicleModelUseCase.execute(
      vehicleModelData,
    );
    expect(vehicleModel).toHaveProperty('id');
  });
});
