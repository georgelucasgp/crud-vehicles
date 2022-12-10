import { VehicleModel } from '@modules/vehicles/entities/VehicleModel';
import cuid from 'cuid';

import { VehicleModelsRepositoryInterface } from '../VehicleModelsRepositoryInterface';

class VehicleModelRepositoryInMemory implements VehicleModelsRepositoryInterface {
  private vehiclesModel: VehicleModel[] = [];

  async findById(id: string): Promise<VehicleModel | null> {
    const vehicleModel = this.vehiclesModel.find((vehicleModel) => vehicleModel.id === id);
    if (!vehicleModel) return null;
    return vehicleModel;
  }

  async findByModel(model: string): Promise<VehicleModel | null> {
    const vehicleModel = this.vehiclesModel.find((vehicleModel) => vehicleModel.model === model);
    if (!vehicleModel) return null;
    return vehicleModel;
  }

  async list(): Promise<VehicleModel[]> {
    return this.vehiclesModel;
  }

  async show(id: string): Promise<VehicleModel | null> {
    const vehicleModel = this.vehiclesModel.find((vehicleModel) => vehicleModel.id === id);
    const result = vehicleModel == undefined ? null : vehicleModel;
    return result;
  }

  async create(vehicleModel: VehicleModel): Promise<VehicleModel> {
    Object.assign(vehicleModel, {
      id: cuid(),
    });
    this.vehiclesModel.push(vehicleModel);
    return vehicleModel;
  }
  async update(vehicleModel: VehicleModel): Promise<VehicleModel> {
    const index = this.vehiclesModel.findIndex((v) => v.id === vehicleModel.id);
    this.vehiclesModel[index] = vehicleModel;
    return vehicleModel;
  }

  async delete(vehicleModel: VehicleModel): Promise<VehicleModel> {
    const index = this.vehiclesModel.findIndex((v) => v.id === vehicleModel.id);
    this.vehiclesModel.splice(index, 1);
    return vehicleModel;
  }
}

export { VehicleModelRepositoryInMemory };
