import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { IVehicleModelsRepository } from '../../repositories/IVehicleModelsRepository';

@injectable()
class DeleteVehicleModelUseCase {
  constructor(
    @inject('PrismaVehicleModelsRepository')
    private vehicleModelsRepository: IVehicleModelsRepository,
  ) {}

  async execute(id: string) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelsRepository.findById(id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    await this.vehicleModelsRepository.delete(vehicleModelAlreadyExists);

    return vehicleModelAlreadyExists;
  }
}

export default DeleteVehicleModelUseCase;
