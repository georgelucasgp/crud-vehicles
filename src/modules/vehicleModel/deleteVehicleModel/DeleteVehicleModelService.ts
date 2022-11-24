import { IVehicleModelRequestDTO } from '../../../dto/IVehicleModelRequestDTO';
import { VehicleModel } from '../../../entities/VehicleModel';
import AppError from '../../../errors/AppError';
import { IVehiclesModelRepositories } from '../../../repositories/IVehiclesModelRepositories';

class DeleteVehicleModelService {
  constructor(private vehicleModelRepository: IVehiclesModelRepositories) {}

  async execute(data: IVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists = await this.vehicleModelRepository.exists(data.model);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('VehicleModel does not exist', 400);
    }

    const vehicleModel = new VehicleModel(data);
    await this.vehicleModelRepository.delete(vehicleModel.model);
  }
}

export default DeleteVehicleModelService;
