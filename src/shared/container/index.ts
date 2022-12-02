import PrismaVehicleModelsRepository from '@modules/vehicleModel/repositories/implementation/PrismaVehicleModelsRepository';
import { VehicleModelsRepositoryInterface } from '@modules/vehicleModel/repositories/VehicleModelsRepositoryInterface';
import PrismaVehicleRepository from '@modules/vehicles/infra/repositories/implementation/PrismaVehicleRepository';
import { VehicleRepositoryInterface } from '@modules/vehicles/infra/repositories/VehicleRepositoryInterface';
import { container } from 'tsyringe';

container.registerSingleton<VehicleRepositoryInterface>(
  'PrismaVehicleRepository',
  PrismaVehicleRepository,
);

container.registerSingleton<VehicleModelsRepositoryInterface>(
  'PrismaVehicleModelsRepository',
  PrismaVehicleModelsRepository,
);
