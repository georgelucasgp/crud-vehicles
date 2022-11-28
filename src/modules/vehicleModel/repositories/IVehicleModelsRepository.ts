import { VehicleModel } from '../entities/VehicleModel';

export interface IVehicleModelsRepository {
  findById(id: string): Promise<VehicleModel | null>;
  findByModel(model: string): Promise<VehicleModel | null>;
  list(): Promise<VehicleModel[]>;
  show(id: string): Promise<VehicleModel | null>;
  create(vehicleModel: VehicleModel): Promise<VehicleModel>;
  update(vehicleModel: VehicleModel): Promise<VehicleModel>;
  delete(vehicleModel: VehicleModel): Promise<VehicleModel>;
}
