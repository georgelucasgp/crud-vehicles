import { IVehicleRequestDTO } from '../../../dto/IVehicleRequestDTO';
import { Vehicle } from '../../../entities/Vehicle';
import AppError from '../../../errors/AppError';
import { IVehiclesRepositories } from '../../../repositories/IVehiclesRepositories';

class VehicleService {
  constructor(private vehicleRepository: IVehiclesRepositories) {}

  async show(id: string) {
    const vehicleAlreadyExists = await this.vehicleRepository.findById(id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const result = await this.vehicleRepository.show(id);
    return result;
  }

  async list() {
    const vehicle = await this.vehicleRepository.list();
    return vehicle;
  }

  async create(data: Omit<IVehicleRequestDTO, 'id'>) {
    const vehicleAlreadyExists =
      await this.vehicleRepository.findByLicensePlate(data.license_plate);

    if (vehicleAlreadyExists) {
      throw new AppError('Vehicle already Exists', 400);
    }

    const vehicle = new Vehicle(data);
    await this.vehicleRepository.create(vehicle);
  }

  async update(data: IVehicleRequestDTO) {
    const vehicleAlreadyExists = await this.vehicleRepository.findById(data.id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const licensePlateAlreadyExists =
      await this.vehicleRepository.findByLicensePlate(data.license_plate);

    if (licensePlateAlreadyExists) {
      throw new AppError('Vehicle already Exists', 400);
    }

    const vehicle = new Vehicle(data);
    await this.vehicleRepository.update(vehicle);
  }

  async delete(id: string) {
    const vehicleAlreadyExists = await this.vehicleRepository.findById(id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    await this.vehicleRepository.delete(id);
  }
}

export default VehicleService;
