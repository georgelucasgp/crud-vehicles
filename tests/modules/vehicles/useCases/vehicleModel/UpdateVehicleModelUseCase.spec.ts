import { VehicleModel } from '@modules/vehicles/entities/VehicleModel';
import { VehicleModelRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleModelRepositoryInMemory';
import UpdateVehicleModelUseCase from '@modules/vehicles/useCases/vehicleModel/UpdateVehicleModelUseCase';
import { AppError } from '@shared/errors/AppError';

let vehicleModelRepositoryInMemory: VehicleModelRepositoryInMemory;
let updateVehicleModelUseCase: UpdateVehicleModelUseCase;

let vehicleModelData: VehicleModel;

beforeAll(() => {
  vehicleModelRepositoryInMemory = new VehicleModelRepositoryInMemory();
  updateVehicleModelUseCase = new UpdateVehicleModelUseCase(vehicleModelRepositoryInMemory);
});

describe('Update Vehicle Model Use Case', () => {
  vehicleModelData = {
    model: 'Fox',
    brand: 'Volkswagen',
    model_year: 2012,
  };

  it('should be able to update a vehicle Model', async () => {
    const vehicleModel = await vehicleModelRepositoryInMemory.create(vehicleModelData);
    const vehicleModelUpdated = await updateVehicleModelUseCase.execute({
      id: vehicleModel.id as string,
      model: 'Corola',
      brand: 'Toyota',
      model_year: 2020,
    });

    expect(vehicleModelUpdated.model).toEqual('Corola');
  });

  it('should not be able to update a vehicle Model with invalid id', async () => {
    await expect(
      updateVehicleModelUseCase.execute({
        id: 'invalid_id',
        model: 'Fox',
        brand: 'Volkswagen',
        model_year: 2012,
      }),
    ).rejects.toEqual(new AppError('Vehicle does not exist', 400));
  });
});
