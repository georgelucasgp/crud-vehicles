import { Vehicle } from '@modules/vehicles/entities/Vehicle';
import { VehicleModel } from '@modules/vehicles/entities/VehicleModel';
import { VehicleModelRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleModelRepositoryInMemory';
import { VehicleRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleRepositoryInMemory';
import { CreateVehicleUseCase } from '@modules/vehicles/useCases/vehicles/CreateVehicleUseCase';
import { AppError } from '@shared/errors/AppError';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let vehicleModelsRepositoryInMemory: VehicleModelRepositoryInMemory;
let createVehicleUseCase: CreateVehicleUseCase;

let vehicleData: Vehicle;
let vehicleModelData: VehicleModel;

beforeAll(() => {
  vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
  vehicleModelsRepositoryInMemory = new VehicleModelRepositoryInMemory();
  createVehicleUseCase = new CreateVehicleUseCase(
    vehicleRepositoryInMemory,
    vehicleModelsRepositoryInMemory,
  );
});

describe('Create Vehicle Use Case', () => {
  vehicleModelData = {
    model: 'Fusca',
    brand: 'Volkswagen',
    model_year: 1969,
  };
  vehicleData = {
    license_plate: 'AAA-0000',
    chassis: 'ABCDEFG',
    renavam: '123456789',
    vehicles_model_id: '1',
  };
  it('should be able to create a new vehicle', async () => {
    const vehicleModel = await vehicleModelsRepositoryInMemory.create(vehicleModelData);
    const vehicle = await createVehicleUseCase.execute({
      ...vehicleData,
      vehicles_model_id: vehicleModel.id as string,
    });

    expect(vehicle).toHaveProperty('id');
  });

  it('should not be able to create a new vehicle with license plate already exists', async () => {
    await vehicleRepositoryInMemory.create(vehicleData);

    await expect(createVehicleUseCase.execute(vehicleData)).rejects.toEqual(
      new AppError('Vehicle already Exists', 400),
    );
  });
});
