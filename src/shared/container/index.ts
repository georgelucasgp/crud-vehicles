import PrismaVehicleModelsRepository from '@modules/vehicleModel/repositories/implementation/PrismaVehicleModelsRepository';
import { IVehicleModelsRepository } from '@modules/vehicleModel/repositories/IVehicleModelsRepository';
import PrismaVehicleRepository from '@modules/vehicles/infra/repositories/implementation/PrismaVehicleRepository';
import { IVehicleRepository } from '@modules/vehicles/infra/repositories/IVehicleRepository';
import { container } from 'tsyringe';

container.registerSingleton<IVehicleRepository>(
  'PrismaVehicleRepository',
  PrismaVehicleRepository,
);

container.registerSingleton<IVehicleModelsRepository>(
  'PrismaVehicleModelsRepository',
  PrismaVehicleModelsRepository,
);
