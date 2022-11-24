import { IVehicleRequestDTO } from '../../dto/IVehicleRequestDTO';
import AppError from '../../errors/AppError';
import VehicleRepository from '../../repositories/VehicleRepository';

class ShowVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  async handler(id: string): Promise<IVehicleRequestDTO | null> {
    const vehicleAlreadyExists = await this.vehicleRepository.findById(id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicle = await this.vehicleRepository.show(id);

    return vehicle;
  }
}

export default ShowVehicleService;
