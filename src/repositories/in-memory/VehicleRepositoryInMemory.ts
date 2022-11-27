import cuid from 'cuid';

import { Vehicle } from '../../entities/Vehicle';
import { IVehiclesRepositories } from '../IVehiclesRepositories';

class VehicleRepositoryInMemory implements IVehiclesRepositories {
  private vehicles: Vehicle[] = [];

  async findById(id: string): Promise<boolean> {
    const vehicle = this.vehicles.some((vehicle) => vehicle.id === id);
    return vehicle;
  }

  async findByLicensePlate(license_plate: string): Promise<boolean> {
    const vehicle = this.vehicles.some(
      (vehicle) => vehicle.license_plate === license_plate,
    );
    return vehicle;
  }

  async list(): Promise<Vehicle[] | null> {
    return this.vehicles;
  }

  async show(id: string): Promise<Vehicle | null> {
    const vehicle = this.vehicles.find((vehicle) => vehicle.id === id);
    const result = vehicle == undefined ? null : vehicle;
    return result;
  }

  async create(vehicle: Vehicle): Promise<void> {
    Object.assign(vehicle, {
      id: cuid(),
    });
    this.vehicles.push(vehicle);
  }
  async update(vehicle: Vehicle): Promise<void> {
    const index = this.vehicles.findIndex((v) => v.id === vehicle.id);
    this.vehicles[index] = vehicle;
  }

  async delete(id: string): Promise<void> {
    const index = this.vehicles.findIndex((v) => v.id === id);
    this.vehicles.splice(index, 1);
  }
}

export { VehicleRepositoryInMemory };
