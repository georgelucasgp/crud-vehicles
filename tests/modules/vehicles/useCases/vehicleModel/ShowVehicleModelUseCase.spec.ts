import { VehicleModel } from '@modules/vehicles/entities/VehicleModel';
import { VehicleModelRepositoryInMemory } from '@modules/vehicles/infra/repositories/in-memory/VehicleModelRepositoryInMemory';
import ShowVehicleModelUseCase from '@modules/vehicles/useCases/vehicleModel/ShowVehicleModelUseCase';
import { AppError } from '@shared/errors/AppError';

let vehicleModelRepositoryInMemory: VehicleModelRepositoryInMemory;
let showVehicleModelUseCase: ShowVehicleModelUseCase;
let vehicleModelData: VehicleModel;

beforeAll(() => {
  vehicleModelRepositoryInMemory = new VehicleModelRepositoryInMemory();
  showVehicleModelUseCase = new ShowVehicleModelUseCase(vehicleModelRepositoryInMemory);
});

describe('Show Vehicle Model Use Case', () => {
  vehicleModelData = {
    model: 'Fox',
    brand: 'Volkswagen',
    model_year: 2012,
  };

  it('should be able to show a vehicle Model', async () => {
    const vehicleModel = await vehicleModelRepositoryInMemory.create(vehicleModelData);
    const vehicleModelShowed = await showVehicleModelUseCase.show(vehicleModel.id as string);

    expect(vehicleModelShowed).toEqual(vehicleModel);
  });

  it('should not be able to show a vehicle Model with invalid id', async () => {
    await expect(showVehicleModelUseCase.show('invalid_id')).rejects.toEqual(
      new AppError('Vehicle does not exist', 400),
    );
  });
});

describe('List Vehicle Model Use Case', () => {
  it('should be able to list all vehicle Models', async () => {
    await vehicleModelRepositoryInMemory.create(vehicleModelData);
    await vehicleModelRepositoryInMemory.create(vehicleModelData);
    await vehicleModelRepositoryInMemory.create(vehicleModelData);
    await vehicleModelRepositoryInMemory.create(vehicleModelData);
    await vehicleModelRepositoryInMemory.create(vehicleModelData);

    const vehicleModels = await showVehicleModelUseCase.list();

    expect(vehicleModels.length).toBe(6);
  });
});
