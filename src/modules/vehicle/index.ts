import PrismaVehicleRepository from '../../repositories/prisma/PrismaVehicleRepository';
import { VehicleController } from './controllers/VehicleController';
import VehicleService from './controllers/VehicleService';

export const vehicleFactory = () => {
  const vehicleRepository = new PrismaVehicleRepository();
  const vehicle = new VehicleService(vehicleRepository);
  const vehicleController = new VehicleController(vehicle);
  return vehicleController;
};
