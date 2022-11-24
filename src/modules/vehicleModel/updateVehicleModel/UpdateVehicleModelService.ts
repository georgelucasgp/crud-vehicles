import { IVehicleRequestDTO } from '../../../dto/IVehicleRequestDTO';
import { Vehicle } from '../../../entities/Vehicle';
import AppError from '../../../errors/AppError';
import { IVehiclesRepositories } from '../../../repositories/IVehiclesRepositories';

class UpdateVehicleService {
  constructor(private vehicleRepository: IVehiclesRepositories) {}

  async execute({ license_plate, chassis, renavam, vehicles_model_id }: IVehicleRequestDTO) {
    const vehicleAlreadyExists = await this.vehicleRepository.exists(license_plate);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicle = new Vehicle({ license_plate, chassis, renavam, vehicles_model_id });
    await this.vehicleRepository.put(vehicle);
  }
}

export default UpdateVehicleService;
