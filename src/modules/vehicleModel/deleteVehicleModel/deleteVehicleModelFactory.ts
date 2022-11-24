import PrismaVehicleModelRepository from '../../../repositories/prisma/PrismaVehicleModelRepository';
import { DeleteVehicleModelController } from './DeleteVehicleModelController';
import DeleteVehicleModelService from './DeleteVehicleModelService';

export const deleteVehicleModelFactory = () => {
  const vehicleModelRepository = new PrismaVehicleModelRepository();
  const deleteVehicleModel = new DeleteVehicleModelService(vehicleModelRepository);
  const deleteVehicleModelController = new DeleteVehicleModelController(deleteVehicleModel);
  return deleteVehicleModelController;
};
