import { container } from 'tsyringe';

import { IVehiclesModelRepositories } from '../../repositories/IVehiclesModelRepositories';
import PrismaVehicleModelRepository from '../../repositories/prisma/PrismaVehicleModelRepository';
import PrismaVehicleRepository from '../../repositories/prisma/PrismaVehicleRepository';
import { IVehiclesRepositories } from './../../repositories/IVehiclesRepositories';

container.registerSingleton<IVehiclesRepositories>(
  'PrismaVehicleRepository',
  PrismaVehicleRepository,
);

container.registerSingleton<IVehiclesModelRepositories>(
  'PrismaVehicleModelRepository',
  PrismaVehicleModelRepository,
);
