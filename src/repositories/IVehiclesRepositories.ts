import { Vehicle } from '../entities/Vehicle';

export interface IVehiclesRepositories {
  exists(license_plate: string): Promise<boolean>;
  list(): Promise<Vehicle[]>;
  show(license_plate: string): Promise<Vehicle>;
  create(vehicle: Vehicle): Promise<void>;
  put(vehicle: Vehicle): Promise<void>;
  delete(license_plate: string): Promise<void>;
}
