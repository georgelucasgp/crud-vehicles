import { prisma } from '@config/prisma/prismaClient';
import { VehicleModel } from '@modules/vehicleModel/entities/VehicleModel';

import { VehicleModelsRepositoryInterface } from '../VehicleModelsRepositoryInterface';

class PrismaVehicleModelsRepository implements VehicleModelsRepositoryInterface {
  async findById(id: string): Promise<VehicleModel | null> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        id,
      },
    });

    return vehicleModel;
  }

  async findByModel(model: string): Promise<VehicleModel | null> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        model,
      },
    });

    return vehicleModel;
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

  async create(data: VehicleModel): Promise<VehicleModel> {
    const vehicle = await prisma.vehicleModel.create({
      data,
    });

    return vehicle;
  }

  async update(data: VehicleModel): Promise<VehicleModel> {
    const vehicle = await prisma.vehicleModel.update({
      where: {
        id: data.id,
      },
      data,
    });
    return vehicle;
  }

  async delete({ id }: VehicleModel): Promise<VehicleModel> {
    const vehicle = await prisma.vehicleModel.delete({
      where: {
        id,
      },
    });
    return vehicle;
  }
}

export default PrismaVehicleModelsRepository;
