import { VehicleModelDTO } from '../../dto/VehicleModelDTO';
import AppError from '../../errors/AppError';
import VehicleModelRepository from '../../repositories/VehicleModelRepository';

class UpdateVehicleModelService {
  private vehicleModelRepository: VehicleModelRepository;

  constructor() {
    this.vehicleModelRepository = new VehicleModelRepository();
  }

  async handler({ id, model, brand, model_year }: VehicleModelDTO) {
    const vehicleModelAlreadyExists = await this.vehicleModelRepository.findById(id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle Model does not exist', 400);
    }

    const vehicle = await this.vehicleModelRepository.put({
      id,
      model,
      brand,
      model_year,
    });

    return vehicle;
  }
}

export default UpdateVehicleModelService;
