import { VehicleModel } from '../entities/VehicleModel';

export interface IVehiclesModelRepositories {
  exists(model: string): Promise<boolean>;
  list(): Promise<VehicleModel[] | null>;
  show(model: string): Promise<VehicleModel | null>;
  create(vehicleModel: VehicleModel): Promise<void>;
  update(vehicleModel: VehicleModel): Promise<void>;
  delete(model: string): Promise<void>;
}
