import { VehicleModelsRepositoryInterface } from '@modules/vehicles/infra/repositories/VehicleModelsRepositoryInterface';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class ShowVehicleModelUseCase {
  constructor(
    @inject('PrismaVehicleModelsRepository')
    private vehicleModelRepository: VehicleModelsRepositoryInterface,
  ) {}

  async show(id: string) {
    const vehicleModelAlreadyExists = await this.vehicleModelRepository.findById(id);

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
