import VehicleModelRepository from '../../repositories/VehicleModelRepository';

class ListVehicleModelService {
  private vehicleModelRepository: VehicleModelRepository;

  constructor() {
    this.vehicleModelRepository = new VehicleModelRepository();
  }

  async handler() {
    const vehicle = await this.vehicleModelRepository.index();

    return vehicle;
  }
}

export default ListVehicleModelService;
