import { IVehicleRepository } from '@modules/vehicles/infra/repositories/IVehicleRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

@injectable()
class ShowVehicleUseCase {
  constructor(
    @inject('PrismaVehicleRepository')
    private vehicleRepository: IVehicleRepository,
  ) {}

  async show(id: string) {
    const vehicleAlreadyExists = await this.vehicleRepository.show(id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }
    return vehicleAlreadyExists;
  }

  async list() {
    const vehicle = await this.vehicleRepository.list();
    return vehicle;
  }
}

export { ShowVehicleUseCase };
