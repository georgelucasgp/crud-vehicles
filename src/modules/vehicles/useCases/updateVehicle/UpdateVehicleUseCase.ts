import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { Vehicle } from '../../entities/Vehicle';
import { IVehicleRepository } from '../../infra/repositories/IVehicleRepository';
import { IUpdateVehicleRequestDTO } from './../../dtos/IUpdateVehicleRequestDTO';

@injectable()
class UpdateVehicleUseCase {
  constructor(
    @inject('PrismaVehicleRepository')
    private vehicleRepository: IVehicleRepository,
  ) {}

  async execute(data: IUpdateVehicleRequestDTO) {
    const vehicleAlreadyExists = await this.vehicleRepository.findById(data.id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const licensePlateAlreadyExists =
      await this.vehicleRepository.findByLicensePlate(data.license_plate);

    if (licensePlateAlreadyExists) {
      throw new AppError('License Plate Vehicle already Exists', 400);
    }

    const vehicle = Vehicle.create(data);
    await this.vehicleRepository.update(vehicle);
  }
}

export { UpdateVehicleUseCase };
