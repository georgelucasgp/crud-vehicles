import { ICreateVehicleModelRequestDTO } from '@modules/vehicleModel/dtos/ICreateVehicleModelRequestDTO';
import { VehicleModel } from '@modules/vehicleModel/entities/VehicleModel';
import { IVehicleModelsRepository } from '@modules/vehicleModel/repositories/IVehicleModelsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateVehicleModelUseCase {
  constructor(
    @inject('PrismaVehicleModelsRepository')
    private vehicleModelsRepository: IVehicleModelsRepository,
  ) {}

  async execute(data: ICreateVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists = await this.vehicleModelsRepository.findByModel(data.model);

    if (vehicleModelAlreadyExists) {
      throw new AppError('Vehicle Model Already Exists', 400);
    }

    const vehicleModelCreate = VehicleModel.create(data);

    const vehicleModel = await this.vehicleModelsRepository.create(vehicleModelCreate);

    return vehicleModel;
  }
}

export default CreateVehicleModelUseCase;
