import PrismaVehicleRepository from '../../../repositories/prisma/PrismaVehicleRepository';
import { ShowVehicleController } from './ShowVehicleController';
import ShowVehicleService from './ShowVehicleService';

export const ShowVehicleFactory = () => {
  const vehicleRepository = new PrismaVehicleRepository();
  const showVehicle = new ShowVehicleService(vehicleRepository);
  const showVehicleController = new ShowVehicleController(showVehicle);
  return showVehicleController;
};
