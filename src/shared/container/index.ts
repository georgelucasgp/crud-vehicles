import { container } from 'tsyringe';

import PrismaVehicleRepository from '../../modules/vehicles/infra/repositories/implementation/PrismaVehicleRepository';
import { IVehicleRepository } from './../../modules/vehicles/infra/repositories/IVehicleRepository';

container.registerSingleton<IVehicleRepository>(
  'PrismaVehicleRepository',
  PrismaVehicleRepository,
);

container.registerSingleton<IVehiclesModelRepositories>(
  'PrismaVehicleModelRepository',
  PrismaVehicleModelRepository,
);
