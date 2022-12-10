import PrismaVehicleModelsRepository from '@modules/vehicles/infra/repositories/implementation/PrismaVehicleModelsRepository';
import PrismaVehicleRepository from '@modules/vehicles/infra/repositories/implementation/PrismaVehicleRepository';
import { VehicleModelsRepositoryInterface } from '@modules/vehicles/infra/repositories/VehicleModelsRepositoryInterface';
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
