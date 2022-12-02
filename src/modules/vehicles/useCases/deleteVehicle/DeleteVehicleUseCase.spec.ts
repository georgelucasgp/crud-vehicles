import { Vehicle } from '@modules/vehicles/entities/Vehicle';
import { VehicleRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { DeleteVehicleUseCase } from './DeleteVehicleUseCase';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let deleteVehicleUseCase: DeleteVehicleUseCase;

let vehicleData: Vehicle;

beforeAll(() => {
  vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
  deleteVehicleUseCase = new DeleteVehicleUseCase(vehicleRepositoryInMemory);
});
describe('Delete Vehicle Use Case', () => {
  vehicleData = {
    license_plate: 'AAA-4444',
    chassis: 'ABCDEFG',
    renavam: '123456789',
    vehicles_model_id: '1',
  };
  it('should be able to delete a vehicle', async () => {
    const vehicle = await vehicleRepositoryInMemory.create(vehicleData);

    await deleteVehicleUseCase.execute(vehicle.id as string);

    const vehicleShow = await vehicleRepositoryInMemory.findById(vehicle.id as string);

    expect(vehicleShow).toBeNull();
  });

  it('should not be able to delete a vehicle with a id that does not exists', async () => {
    await expect(deleteVehicleUseCase.execute('123')).rejects.toEqual(
      new AppError('Vehicle does not exist', 400),
    );
  });
});
