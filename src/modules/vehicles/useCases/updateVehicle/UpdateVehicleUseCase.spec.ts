import { Vehicle } from '@modules/vehicles/entities/Vehicle';
import { VehicleRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { rejects } from 'assert';

import { UpdateVehicleUseCase } from '../updateVehicle/UpdateVehicleUseCase';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let updateVehicleUseCase: UpdateVehicleUseCase;

let vehicleData: Vehicle;

beforeAll(() => {
  vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
  updateVehicleUseCase = new UpdateVehicleUseCase(vehicleRepositoryInMemory);
});
describe('Update Vehicle Use Case', () => {
  vehicleData = {
    license_plate: 'AAA-1111',
    chassis: 'ABCDEFG',
    renavam: '123456789',
    vehicles_model_id: '1',
  };
  it('should be able to update a vehicle', async () => {
    const vehicle = await vehicleRepositoryInMemory.create(vehicleData);

    const updatedVehicle = await updateVehicleUseCase.execute({
      id: vehicle.id as string,
      license_plate: 'AAA-2222',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '1',
    });

    expect(updatedVehicle.license_plate).toBe('AAA-2222');
  });

  it('should not be able to update a vehicle with a license plate that does not exists', async () => {
    await expect(
      updateVehicleUseCase.execute({
        id: '123',
        license_plate: 'AAA-2222',
        chassis: 'ABCDEFG',
        renavam: '123456789',
        vehicles_model_id: '1',
      }),
    ).rejects.toEqual(new AppError('Vehicle does not exist', 400));
  });
  it('should not be able to update a vehicle with a license plate already exists', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      license_plate: 'AAA-2222',
      chassis: 'ABCDEFG',
      renavam: '123456789',
      vehicles_model_id: '1',
    });

    await expect(
      updateVehicleUseCase.execute({
        id: vehicle.id as string,
        ...vehicle,
      }),
    ).rejects.toEqual(
      new AppError('License Plate Vehicle already Exists', 400),
    );
  });
});
