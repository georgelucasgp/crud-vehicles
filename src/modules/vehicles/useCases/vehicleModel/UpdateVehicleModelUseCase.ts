import { IUpdateVehicleModelRequestDTO } from '@modules/vehicles/dtos/IUpdateVehicleModelRequestDTO';
import { VehicleModel } from '@modules/vehicles/entities/VehicleModel';
import { VehicleModelsRepositoryInterface } from '@modules/vehicles/infra/repositories/VehicleModelsRepositoryInterface';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdateVehicleModelUseCase {
  constructor(
    @inject('PrismaVehicleModelsRepository')
    private vehicleModelsRepository: VehicleModelsRepositoryInterface,
  ) {}

  async execute(data: IUpdateVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists = await this.vehicleModelsRepository.findById(data.id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = VehicleModel.create(data);
    await this.vehicleModelsRepository.update(vehicleModel);
    return vehicleModel;
  }
}

export default UpdateVehicleModelUseCase;
