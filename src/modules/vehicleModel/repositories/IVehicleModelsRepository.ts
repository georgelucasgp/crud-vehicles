import { VehicleModel } from '../entities/VehicleModel';

export interface IVehicleModelsRepository {
  findById(id: string): Promise<boolean>;
  findByModel(model: string): Promise<boolean>;
  list(): Promise<VehicleModel[] | null>;
  show(id: string): Promise<VehicleModel | null>;
  create(vehicleModel: VehicleModel): Promise<void>;
  update(vehicleModel: VehicleModel): Promise<void>;
  delete(id: string): Promise<void>;
}
