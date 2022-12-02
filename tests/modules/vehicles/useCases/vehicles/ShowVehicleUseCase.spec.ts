import { Vehicle } from '@modules/vehicles/entities/Vehicle';
import { VehicleRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleRepositoryInMemory';
import { ShowVehicleUseCase } from '@modules/vehicles/useCases/vehicles/ShowVehicleUseCase';
import { AppError } from '@shared/errors/AppError';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let showVehicleUseCase: ShowVehicleUseCase;

let vehicleData: Vehicle;

beforeAll(() => {
  vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
  showVehicleUseCase = new ShowVehicleUseCase(vehicleRepositoryInMemory);
});

describe('Show Vehicle Use Case', () => {
  vehicleData = {
    id: '1',
    license_plate: 'AAA-1111',
    chassis: 'ABCDEFG',
    renavam: '123456789',
    vehicles_model_id: '1',
  };
  it('should be able to show a vehicle', async () => {
    const vehicle = await vehicleRepositoryInMemory.create(vehicleData);

    const vehicleShow = await showVehicleUseCase.show(vehicle.id as string);

    expect(vehicleShow).toHaveProperty('id');
    expect(vehicleShow.license_plate).toBe('AAA-1111');
  });

  it('should not be able to show a vehicle an existing user', async () => {
    await expect(showVehicleUseCase.show('123')).rejects.toEqual(
      new AppError('Vehicle does not exist', 400),
    );
  });
});

describe('List Vehicles Use Case', () => {
  it('should be able to list all vehicles', async () => {
    await vehicleRepositoryInMemory.create(vehicleData);
    await vehicleRepositoryInMemory.create(vehicleData);
    await vehicleRepositoryInMemory.create(vehicleData);

    const vehicles = await showVehicleUseCase.list();

    expect(vehicles).toHaveLength(4);
  });
});
