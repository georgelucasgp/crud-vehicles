import { Vehicle } from '@modules/vehicles/entities/Vehicle';
import cuid from 'cuid';

import { IVehicleRepository } from '../IVehicleRepository';

class VehicleRepositoryInMemory implements IVehicleRepository {
  vehicles: Vehicle[] = [];

  async findById(id: string): Promise<Vehicle | null> {
    const vehicle = this.vehicles.find((vehicle) => vehicle.id === id);
    if (!vehicle) return null;
    return vehicle;
  }

  async findByLicensePlate(license_plate: string): Promise<Vehicle | null> {
    const vehicle = this.vehicles.find(
      (vehicle) => vehicle.license_plate === license_plate,
    );
    if (!vehicle) return null;
    return vehicle;
  }

  async list(): Promise<Vehicle[]> {
    return this.vehicles;
  }

  async show(id: string): Promise<Vehicle | null> {
    const vehicle = this.vehicles.find((vehicle) => vehicle.id === id);
    if (!vehicle) return null;
    return vehicle;
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
