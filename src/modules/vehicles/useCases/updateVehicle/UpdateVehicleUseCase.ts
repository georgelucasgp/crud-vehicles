import { IUpdateVehicleRequestDTO } from '@modules/vehicles/dtos/IUpdateVehicleRequestDTO';
import { Vehicle } from '@modules/vehicles/entities/Vehicle';
import { IVehicleRepository } from '@modules/vehicles/infra/repositories/IVehicleRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

@injectable()
class UpdateVehicleUseCase {
  constructor(
    @inject('PrismaVehicleRepository')
    private vehicleRepository: IVehicleRepository,
  ) {}

  async execute(data: IUpdateVehicleRequestDTO) {
    const { id } = data;
    const vehicleAlreadyExists = await this.vehicleRepository.findById(id);

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

    return vehicle;
  }
}

export { UpdateVehicleUseCase };
