import AppError from '../../errors/AppError';
import VehicleRepository from '../../repositories/VehicleRepository';

class DeleteVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  async handler(id: string) {
    const vehicleAlreadyExists = await this.vehicleRepository.findById(id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }
    const vehicle = await this.vehicleRepository.delete(id);

    return vehicle;
  }
}

export default DeleteVehicleService;
