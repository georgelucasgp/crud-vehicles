import { Vehicle } from '../entities/Vehicle';

export interface IVehiclesRepositories {
  findById(id: string): Promise<boolean>;
  findByLicensePlate(license_plate: string): Promise<boolean>;
  list(): Promise<Vehicle[] | null>;
  show(id: string): Promise<Vehicle | null>;
  create(vehicle: Vehicle): Promise<void>;
  update(vehicle: Vehicle): Promise<void>;
  delete(id: string): Promise<void>;
}
