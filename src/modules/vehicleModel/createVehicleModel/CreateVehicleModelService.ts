import { IVehicleModelRequestDTO } from '../../../dto/IVehicleModelRequestDTO';
import { VehicleModel } from '../../../entities/VehicleModel';
import AppError from '../../../errors/AppError';
import { IVehiclesModelRepositories } from '../../../repositories/IVehiclesModelRepositories';

class CreateVehicleModelService {
  constructor(private vehicleModelRepository: IVehiclesModelRepositories) {}

  async execute(data: IVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists = await this.vehicleModelRepository.exists(data.model);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = new VehicleModel(data);
    await this.vehicleModelRepository.create(vehicleModel);
  }
}

export default CreateVehicleModelService;
