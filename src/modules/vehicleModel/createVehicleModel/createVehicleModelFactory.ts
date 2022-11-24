import PrismaVehicleModelRepository from '../../../repositories/prisma/PrismaVehicleModelRepository';
import { CreateVehicleModelController } from './CreateVehicleModelController';
import CreateVehicleModelService from './CreateVehicleModelService';

export const createVehicleModelFactory = () => {
  const vehicleModelRepository = new PrismaVehicleModelRepository();
  const createVehicleModel = new CreateVehicleModelService(vehicleModelRepository);
  const createVehicleModelController = new CreateVehicleModelController(createVehicleModel);
  return createVehicleModelController;
};
