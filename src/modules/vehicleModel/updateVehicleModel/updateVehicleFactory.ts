import PrismaVehicleRepository from '../../../repositories/prisma/PrismaVehicleRepository';
import { UpdateVehicleController } from './UpdateVehicleController';
import UpdateVehicleService from './UpdateVehicleService';

export const updateVehicleFactory = () => {
  const vehicleRepository = new PrismaVehicleRepository();
  const updateVehicle = new UpdateVehicleService(vehicleRepository);
  const updateVehicleController = new UpdateVehicleController(updateVehicle);
  return updateVehicleController;
};
