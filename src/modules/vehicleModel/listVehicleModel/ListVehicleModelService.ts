import { IVehiclesRepositories } from '../../../repositories/IVehiclesRepositories';

class ListVehicleService {
  constructor(private vehicleRepository: IVehiclesRepositories) {}

  async execute() {
    const vehicle = await this.vehicleRepository.list();
    return vehicle;
  }
}

export default ListVehicleService;
