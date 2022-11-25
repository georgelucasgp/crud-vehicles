import PrismaVehicleModelRepository from '../../repositories/prisma/PrismaVehicleModelRepository';
import { VehicleModelController } from './controllers/VehicleModelController';
import VehicleModelService from './controllers/VehicleModelService';

export const vehicleModelFactory = () => {
  const vehicleModelRepository = new PrismaVehicleModelRepository();
  const vehicleModel = new VehicleModelService(vehicleModelRepository);
  const vehicleModelController = new VehicleModelController(vehicleModel);
  return vehicleModelController;
};
