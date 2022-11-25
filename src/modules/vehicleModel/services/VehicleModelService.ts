import { IVehicleModelRequestDTO } from '../../../dto/IVehicleModelRequestDTO';
import { VehicleModel } from '../../../entities/VehicleModel';
import AppError from '../../../errors/AppError';
import { IVehiclesModelRepositories } from '../../../repositories/IVehiclesModelRepositories';

class VehicleModelService {
  constructor(private vehicleModelRepository: IVehiclesModelRepositories) {}

  async show(id: string) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelRepository.findById(id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = await this.vehicleModelRepository.show(id);
    return vehicleModel;
  }

  async list() {
    const vehicleModel = await this.vehicleModelRepository.list();
    return vehicleModel;
  }

  async create(data: Omit<IVehicleModelRequestDTO, 'id'>) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelRepository.findByModel(data.model);

    if (vehicleModelAlreadyExists) {
      throw new AppError('Vehicle Already Exists', 400);
    }

    const vehicleModel = new VehicleModel(data);
    await this.vehicleModelRepository.create(vehicleModel);
  }

  async update(data: IVehicleModelRequestDTO) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelRepository.findById(data.id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleModel = new VehicleModel(data);
    await this.vehicleModelRepository.update(vehicleModel);
  }

  async delete(id: string) {
    const vehicleModelAlreadyExists =
      await this.vehicleModelRepository.findById(id);

    if (!vehicleModelAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    await this.vehicleModelRepository.delete(id);
  }
}

export default VehicleModelService;