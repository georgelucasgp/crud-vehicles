import AppError from '../../errors/AppError';
import VehicleModelRepository from '../../repositories/VehicleModelRepository';

class DeleteVehicleModelService {
  private vehicleModelRepository: VehicleModelRepository;

  constructor() {
    this.vehicleModelRepository = new VehicleModelRepository();
  }

  async handler(id: string) {
    const vehicleAlreadyExists = await this.vehicleModelRepository.findById(id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle Model does not exist', 400);
    }
    const vehicleModel = await this.vehicleModelRepository.delete(id);

    return vehicleModel;
  }
}

export default DeleteVehicleModelService;
