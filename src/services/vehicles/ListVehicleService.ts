import VehicleRepository from '../../repositories/VehicleRepository';

class ListVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  async handler() {
    const vehicle = await this.vehicleRepository.list();

    return vehicle;
  }
}

export default ListVehicleService;
