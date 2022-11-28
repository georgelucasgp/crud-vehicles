import { Vehicle } from '../../entities/Vehicle';

export interface IVehicleRepository {
  findById(id: string): Promise<boolean>;
  findByLicensePlate(license_plate: string): Promise<boolean>;
  list(): Promise<Vehicle[]>;
  show(id: string): Promise<Vehicle | null>;
  create(vehicle: Vehicle): Promise<Vehicle>;
  update(vehicle: Vehicle): Promise<Vehicle>;
  delete(vehicle: Vehicle): Promise<Vehicle>;
}
