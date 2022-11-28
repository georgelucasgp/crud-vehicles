import cuid from 'cuid';

import { Vehicle } from '../../../entities/Vehicle';
import { IVehicleRepository } from '../IVehicleRepository';

class VehicleRepositoryInMemory implements IVehicleRepository {
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

  async list(): Promise<Vehicle[]> {
    return this.vehicles;
  }

  async show(id: string): Promise<Vehicle | null> {
    const vehicle = this.vehicles.find((vehicle) => vehicle.id === id);
    const result = vehicle == undefined ? null : vehicle;
    return result;
  }

  async create(vehicle: Vehicle): Promise<Vehicle> {
    Object.assign(vehicle, {
      id: cuid(),
    });
    this.vehicles.push(vehicle);
    return vehicle;
  }
  async update(vehicle: Vehicle): Promise<Vehicle> {
    const index = this.vehicles.findIndex((v) => v.id === vehicle.id);
    this.vehicles[index] = vehicle;
    return vehicle;
  }

  async delete(vehicle: Vehicle): Promise<Vehicle> {
    const index = this.vehicles.findIndex((v) => v.id === vehicle.id);
    this.vehicles.splice(index, 1);
    return this.vehicles[index];
  }
}

export { VehicleRepositoryInMemory };
