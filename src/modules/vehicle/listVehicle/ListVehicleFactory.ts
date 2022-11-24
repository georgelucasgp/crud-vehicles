import PrismaVehicleRepository from '../../../repositories/prisma/PrismaVehicleRepository';
import { ListVehicleController } from './ListVehicleController';
import ListVehicleService from './ListVehicleService';

export const ListVehicleFactory = () => {
  const vehicleRepository = new PrismaVehicleRepository();
  const listVehicle = new ListVehicleService(vehicleRepository);
  const listVehicleController = new ListVehicleController(listVehicle);
  return listVehicleController;
};
