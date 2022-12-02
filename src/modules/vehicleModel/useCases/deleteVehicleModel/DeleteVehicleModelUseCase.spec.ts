import { VehicleModel } from '@modules/vehicleModel/entities/VehicleModel';
import { VehicleModelRepositoryInMemory } from '@modules/vehicleModel/repositories/in-memory/VehicleModelRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { DeleteVehicleModelUseCase } from './DeleteVehicleModelUseCase';

let vehicleModelRepositoryInMemory: VehicleModelRepositoryInMemory;
let deleteVehicleModelUseCase: DeleteVehicleModelUseCase;

let vehicleModelData: VehicleModel;

beforeAll(() => {
  vehicleModelRepositoryInMemory = new VehicleModelRepositoryInMemory();
  deleteVehicleModelUseCase = new DeleteVehicleModelUseCase(vehicleModelRepositoryInMemory);
});

describe('Delete Vehicle Model Use Case', () => {
  vehicleModelData = {
    model: 'Fox',
    brand: 'Volkswagen',
    model_year: 2012,
  };

  it('should be able to delete a vehicle Model', async () => {
    const vehicleModel = await vehicleModelRepositoryInMemory.create(vehicleModelData);
    await deleteVehicleModelUseCase.execute(vehicleModel.id as string);

    const vehicleModelDeleted = await vehicleModelRepositoryInMemory.findById(
      vehicleModel.id as string,
    );
    expect(vehicleModelDeleted).toBeNull();
  });

  it('should not be able to delete a vehicle Model with invalid id', async () => {
    await expect(deleteVehicleModelUseCase.execute('invalid_id')).rejects.toEqual(
      new AppError('Vehicle does not exist', 400),
    );
  });
});
