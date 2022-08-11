import { VehicleDTO } from '../../dto/VehicleDTO';
import AppError from '../../errors/AppError';
import VehicleModelRepository from '../../repositories/VehicleModelRepository';
import VehicleRepository from '../../repositories/VehicleRepository';

class CreateVehicleService {
  private vehicleModelRepository: VehicleModelRepository;
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleModelRepository = new VehicleModelRepository();
    this.vehicleRepository = new VehicleRepository();
  }

  async handler({
    id,
    license_plate,
    chassis,
    renavam,
    vehicles_model_id,
  }: VehicleDTO) {
    const vehiclesModalAlreadyExists =
      await this.vehicleModelRepository.findById(vehicles_model_id);

    if (!vehiclesModalAlreadyExists) {
      throw new AppError('Vehicle Model does not exists', 400);
    }

    const vehicleLicensePlateAlreadyExists =
      await this.vehicleRepository.findByLicensePlate(license_plate);

    if (vehicleLicensePlateAlreadyExists) {
      throw new AppError('Vehicle License Plate Already Exists', 400);
    }

    const vehicle = await this.vehicleRepository.create({
      id,
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });

    return vehicle;
  }
}

export default CreateVehicleService;
