import { prisma } from '../../database/prismaClient';
import { VehicleModel } from '../../entities/VehicleModel';
import { IVehiclesModelRepositories } from '../IVehiclesModelRepositories';

class PrismaVehicleModelRepository implements IVehiclesModelRepositories {
  async findById(id: string): Promise<boolean> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        id,
      },
    });

    return !!vehicleModel;
  }

  async findByModel(model: string): Promise<boolean> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        model,
      },
    });

    return !!vehicleModel;
  }

  async list(): Promise<VehicleModel[]> {
    const vehicleModel = await prisma.vehicleModel.findMany();

    return vehicleModel;
  }

  async show(id: string): Promise<VehicleModel | null> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        id,
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

  async update({ id, model, brand, model_year }: VehicleModel): Promise<void> {
    await prisma.vehicleModel.update({
      where: {
        id,
      },
      data: {
        model,
        brand,
        model_year,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.vehicleModel.delete({
      where: {
        id,
      },
    });
  }
}

export default PrismaVehicleModelRepository;
