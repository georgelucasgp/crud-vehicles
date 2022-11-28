import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { VehicleModel } from '../../entities/VehicleModel';
import { IVehicleModelsRepository } from '../../repositories/IVehicleModelsRepository';
import { IUpdateVehicleModelRequestDTO } from './../../dtos/IUpdateVehicleModelRequestDTO';

@injectable()
class UpdateVehicleModelUseCase {
  constructor(
    @inject('PrismaVehicleModelsRepository')
    private vehicleModelsRepository: IVehicleModelsRepository,
  ) {}

  async execute(data: IUpdateVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelsRepository.findById(data.id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = VehicleModel.create(data);
    await this.vehicleModelsRepository.update(vehicleModel);
  }
}

export default UpdateVehicleModelUseCase;
