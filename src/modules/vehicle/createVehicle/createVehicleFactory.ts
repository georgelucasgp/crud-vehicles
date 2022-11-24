import PrismaVehicleRepository from '../../../repositories/prisma/PrismaVehicleRepository';
import { CreateVehicleController } from './CreateVehicleController';
import CreateVehicleService from './CreateVehicleService';

export const createVehicleFactory = () => {
  const vehicleRepository = new PrismaVehicleRepository();
  const createVehicle = new CreateVehicleService(vehicleRepository);
  const createVehicleController = new CreateVehicleController(createVehicle);
  return createVehicleController;
};
