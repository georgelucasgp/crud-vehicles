import { VehicleModel } from '../entities/VehicleModel';

export interface IVehiclesModelRepositories {
  exists(model: string): Promise<boolean>;
  list(): Promise<VehicleModel[]>;
  show(model: string): Promise<VehicleModel>;
  create(vehicleModel: VehicleModel): Promise<void>;
  put(vehicleModel: VehicleModel): Promise<void>;
  delete(model: string): Promise<void>;
}
