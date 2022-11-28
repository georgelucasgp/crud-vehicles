import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { IVehicleModelsRepository } from './../../repositories/IVehicleModelsRepository';

@injectable()
class ShowVehicleModelUseCase {
  constructor(
    @inject('PrismaVehicleModelsRepository')
    private vehicleModelRepository: IVehicleModelsRepository,
  ) {}

  async show(id: string) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelRepository.findById(id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = await this.vehicleModelRepository.show(id);
    return vehicleModel;
  }

  async list() {
    const vehicleModel = await this.vehicleModelRepository.list();
    return vehicleModel;
  }
}

export default ShowVehicleModelUseCase;
