import { VehicleDTO } from '../../dto/VehicleDTO';
import AppError from '../../errors/AppError';
import VehicleRepository from '../../repositories/VehicleRepository';

class UpdateVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  async handler({
    id,
    license_plate,
    chassis,
    renavam,
    vehicles_model_id,
  }: VehicleDTO) {
    const vehicleAlreadyExists = await this.vehicleRepository.findById(id);

    if (!vehicleAlreadyExists) {
      throw new AppError('Vehicle does not exist', 400);
    }

    const vehicleLicensePlateAlreadyExists =
      await this.vehicleRepository.findByLicensePlate(license_plate);

    if (vehicleLicensePlateAlreadyExists) {
      throw new AppError('Vehicle License Plate Already Exists', 400);
    }

    const vehicle = await this.vehicleRepository.put({
      id,
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });

    return vehicle;
  }
}

export default UpdateVehicleService;
