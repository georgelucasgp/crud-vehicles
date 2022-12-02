import { VehicleModelsRepositoryInterface } from '@modules/vehicles/infra/repositories/VehicleModelsRepositoryInterface';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteVehicleModelUseCase {
  constructor(
    @inject('PrismaVehicleModelsRepository')
    private vehicleModelsRepository: VehicleModelsRepositoryInterface,
  ) {}

  async execute(id: string) {
    const vehicleModelAlreadyExists = await this.vehicleModelsRepository.findById(id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    await this.vehicleModelsRepository.delete(vehicleModelAlreadyExists);

    return vehicleModelAlreadyExists;
  }
}

export { DeleteVehicleModelUseCase };
