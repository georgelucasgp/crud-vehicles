import { Vehicle } from '@modules/vehicles/entities/Vehicle';

export interface IVehicleRepository {
  findById(id: string): Promise<Vehicle | null>;
  findByLicensePlate(license_plate: string): Promise<Vehicle | null>;
  list(): Promise<Vehicle[]>;
  show(id: string): Promise<Vehicle | null>;
  create(vehicle: Vehicle): Promise<Vehicle>;
  update(vehicle: Vehicle): Promise<Vehicle>;
  delete(vehicle: Vehicle): Promise<Vehicle>;
}
