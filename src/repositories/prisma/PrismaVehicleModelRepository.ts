import { prisma } from '../../database/prismaClient';
import { VehicleModel } from '../../entities/VehicleModel';
import { IVehiclesModelRepositories } from '../IVehiclesModelRepositories';

class PrismaVehicleModelRepository implements IVehiclesModelRepositories {
  async exists(license_plate: string): Promise<boolean> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        license_plate,
      },
    });

    return !!vehicleModel;
  }

  async list(): Promise<VehicleModel[]> {
    const vehicleModel = await prisma.vehicleModel.findMany();

    return vehicleModel;
  }

  async show(model: string): Promise<VehicleModel> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        model,
      },
    });

    return vehicleModel;
  }

  async create({ model, brand, model_year }: VehicleModel): Promise<void> {
    await prisma.vehicleModel.create({
      data: {
        model,
        brand,
        model_year,
      },
    });
  }

  async put({ model, brand, model_year }: VehicleModel): Promise<void> {
    await prisma.vehicleModel.update({
      where: {
        model,
      },
      data: {
        model,
        brand,
        model_year,
      },
    });
  }

  async delete(model: string): Promise<void> {
    await prisma.vehicleModel.delete({
      where: {
        model,
      },
    });
  }
}

export default PrismaVehicleModelRepository;
