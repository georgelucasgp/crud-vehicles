import { VehicleRepositoryInterface } from '@modules/vehicles/infra/repositories/VehicleRepositoryInterface';
import { AppError } from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

@injectable()
class DeleteVehicleUseCase {
  constructor(
    @inject('PrismaVehicleRepository')
    private vehicleRepository: VehicleRepositoryInterface,
  ) {}

  async execute(id: string) {
    const vehicleAlreadyExists = await this.vehicleRepository.findById(id);
    if (!vehicleAlreadyExists) throw new AppError('Vehicle does not exist', 400);
    await this.vehicleRepository.delete(vehicleAlreadyExists);
    return vehicleAlreadyExists;
  }
}

export { DeleteVehicleUseCase };
