import { VehicleModel } from '@modules/vehicles/entities/VehicleModel';
import { VehicleModelRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleModelRepositoryInMemory';
import CreateVehicleModelUseCase from '@modules/vehicles/useCases/vehicleModel/CreateVehicleModelUseCase';
import { AppError } from '@shared/errors/AppError';

let vehicleModelRepositoryInMemory: VehicleModelRepositoryInMemory;
let createVehicleModelUseCase: CreateVehicleModelUseCase;
let vehicleModelData: VehicleModel;

beforeAll(() => {
  vehicleModelRepositoryInMemory = new VehicleModelRepositoryInMemory();
  createVehicleModelUseCase = new CreateVehicleModelUseCase(vehicleModelRepositoryInMemory);
});

describe('Create Vehicle Model Use Case', () => {
  vehicleModelData = {
    model: 'Gol',
    brand: 'Volkswagen',
    model_year: 2023,
  };
  it('should be able to create a new vehicle Model', async () => {
    const vehicleModel = await createVehicleModelUseCase.execute(vehicleModelData);
    expect(vehicleModel).toHaveProperty('id');
  });
  it('should not be able to create a new vehicle Model with same model', async () => {
    await vehicleModelRepositoryInMemory.create(vehicleModelData);
    await expect(createVehicleModelUseCase.execute(vehicleModelData)).rejects.toEqual(
      new AppError('Vehicle Model Already Exists', 400),
    );
  });
});
