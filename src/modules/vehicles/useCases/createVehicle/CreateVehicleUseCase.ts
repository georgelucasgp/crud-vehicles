import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { ICreateVehicleRequestDTO } from '../../dtos/ICreateVehicleRequestDTO';
import { Vehicle } from '../../entities/Vehicle';
import { IVehicleRepository } from '../../infra/repositories/IVehicleRepository';

@injectable()
class CreateVehicleUseCase {
  constructor(
    @inject('PrismaVehicleRepository')
    private vehicleRepository: IVehicleRepository,
  ) {}

  async execute(data: ICreateVehicleRequestDTO) {
    const vehicleAlreadyExists =
      await this.vehicleRepository.findByLicensePlate(data.license_plate);

    if (vehicleAlreadyExists) {
      throw new AppError('Vehicle already Exists', 400);
    }

    const vehicleCreate = Vehicle.create(data);

    const vehicle = await this.vehicleRepository.create(vehicleCreate);
    return vehicle;
  }
}

export { CreateVehicleUseCase };
