import AppError from '../../errors/AppError';
import VehicleModelRepository from '../../repositories/VehicleModelRepository';

class ShowVehicleService {
  private vehicleModelRepository: VehicleModelRepository;

  constructor() {
    this.vehicleModelRepository = new VehicleModelRepository();
  }

  async handler(id: string) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelRepository.findById(id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle Model does not exist', 400);
    }

    const vehicleModel = await this.vehicleModelRepository.show(id);

    return vehicleModel;
  }
}

export default ShowVehicleService;
