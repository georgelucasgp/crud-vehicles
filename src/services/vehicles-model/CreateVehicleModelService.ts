import { VehicleModelDTO } from '../../dto/VehicleModelDTO';
import AppError from '../../errors/AppError';
import VehicleModelRepository from '../../repositories/VehicleModelRepository';

class CreateVehicleService {
  private vehicleModelRepository: VehicleModelRepository;

  constructor() {
    this.vehicleModelRepository = new VehicleModelRepository();
  }

  async handler({ id, model, brand, model_year }: VehicleModelDTO) {
    const vehiclesModalAlreadyExists = await this.vehicleModelRepository.findByModel(model);

    if (vehiclesModalAlreadyExists) {
      throw new AppError('Vehicle Model Already Exists', 400);
    }

    const vehicleModel = await this.vehicleModelRepository.create({
      id,
      model,
      brand,
      model_year,
    });

    return vehicleModel;
  }
}

export default CreateVehicleService;
