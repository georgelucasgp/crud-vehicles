import cuid from 'cuid';

import { VehicleModel } from '../../entities/VehicleModel';
import { IVehiclesModelRepositories } from '../IVehiclesModelRepositories';

class VehicleModelRepositoryInMemory implements IVehiclesModelRepositories {
  private vehiclesModel: VehicleModel[] = [];

  async findById(id: string): Promise<boolean> {
    const vehicleModel = this.vehiclesModel.some(
      (vehicleModel) => vehicleModel.id === id,
    );
    return vehicleModel;
  }

  async findByModel(model: string): Promise<boolean> {
    const vehicleModel = this.vehiclesModel.some(
      (vehicleModel) => vehicleModel.model === model,
    );
    return vehicleModel;
  }

  async list(): Promise<VehicleModel[] | null> {
    return this.vehiclesModel;
  }

  async show(id: string): Promise<VehicleModel | null> {
    const vehicleModel = this.vehiclesModel.find(
      (vehicleModel) => vehicleModel.id === id,
    );
    const result = vehicleModel == undefined ? null : vehicleModel;
    return result;
  }

  async create(vehicleModel: VehicleModel): Promise<void> {
    Object.assign(vehicleModel, {
      id: cuid(),
    });
    this.vehiclesModel.push(vehicleModel);
  }
  async update(vehicleModel: VehicleModel): Promise<void> {
    const index = this.vehiclesModel.findIndex((v) => v.id === vehicleModel.id);
    this.vehiclesModel[index] = vehicleModel;
  }

  async delete(id: string): Promise<void> {
    const index = this.vehiclesModel.findIndex((v) => v.id === id);
    this.vehiclesModel.splice(index, 1);
  }
}

export { VehicleModelRepositoryInMemory };
