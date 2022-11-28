import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { VehicleModel } from '../../entities/VehicleModel';
import { ICreateVehicleModelRequestDTO } from './../../dtos/ICreateVehicleModelRequestDTO';
import { IVehicleModelsRepository } from './../../repositories/IVehicleModelsRepository';

@injectable()
class CreateVehicleModelUseCase {
  constructor(
    @inject('PrismaVehicleModelsRepository')
    private vehicleModelsRepository: IVehicleModelsRepository,
  ) {}

  async execute(data: ICreateVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelsRepository.findByModel(data.model);

    if (vehicleModelAlreadyExists) {
      throw new AppError('Vehicle Already Exists', 400);
    }

    const vehicleModel = VehicleModel.create(data);
    await this.vehicleModelsRepository.create(vehicleModel);
  }
}

export default CreateVehicleModelUseCase;
