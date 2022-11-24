import { IVehicleRequestDTO } from '../../../dto/IVehicleRequestDTO';
import { Vehicle } from '../../../entities/Vehicle';
import AppError from '../../../errors/AppError';
import { IVehiclesRepositories } from '../../../repositories/IVehiclesRepositories';

class UpdateVehicleService {
  constructor(private vehicleRepository: IVehiclesRepositories) {}

  async execute(data: IVehicleRequestDTO) {
    const vehicleAlreadyExists = await this.vehicleRepository.exists(data.license_plate);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicle = new Vehicle(data);
    await this.vehicleRepository.delete(vehicle.license_plate);
  }
}

export default UpdateVehicleService;
