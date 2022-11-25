import { IVehicleModelRequestDTO } from '../../../dto/IVehicleModelRequestDTO';
import { VehicleModel } from '../../../entities/VehicleModel';
import AppError from '../../../errors/AppError';
import { IVehiclesModelRepositories } from '../../../repositories/IVehiclesModelRepositories';

class VehicleModelService {
  constructor(private vehicleModelRepository: IVehiclesModelRepositories) {}

  async show(model: string) {
    const vehicleModelAlreadyExists = await this.vehicleModelRepository.exists(
      model,
    );

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = await this.vehicleModelRepository.show(model);
    return vehicleModel;
  }

  async list() {
    const vehicleModel = await this.vehicleModelRepository.list();
    return vehicleModel;
  }

  async create(data: IVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists = await this.vehicleModelRepository.exists(
      data.model,
    );

    if (vehicleModelAlreadyExists) {
      throw new AppError('Vehicle Already Exists', 400);
    }

    const vehicleModel = new VehicleModel(data);

    await this.vehicleModelRepository.create(vehicleModel);
  }

  async update({ id, model, brand, model_year }: IVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists = await this.vehicleModelRepository.exists(
      model,
    );

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = new VehicleModel({ id, model, brand, model_year });
    await this.vehicleModelRepository.update(vehicleModel);
  }

  async delete(data: IVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists = await this.vehicleModelRepository.exists(
      data.model,
    );

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = new VehicleModel(data);
    await this.vehicleModelRepository.delete(vehicleModel.model);
  }
}

export default VehicleModelService;
