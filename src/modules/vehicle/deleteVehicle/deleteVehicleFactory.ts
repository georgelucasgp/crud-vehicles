import PrismaVehicleRepository from '../../../repositories/prisma/PrismaVehicleRepository';
import { DeleteVehicleController } from './deleteVehicleController';
import DeleteVehicleService from './DeleteVehicleService';

export const deleteVehicleFactory = () => {
  const vehicleRepository = new PrismaVehicleRepository();
  const deleteVehicle = new DeleteVehicleService(vehicleRepository);
  const deleteVehicleController = new DeleteVehicleController(deleteVehicle);
  return deleteVehicleController;
};
