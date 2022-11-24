import { prisma } from '../database/prismaClient';
import { VehicleModelDTO } from '../dto/VehicleModelDTO';

class VehicleModelRepository {
  async index() {
    const vehicleModel = await prisma.vehicleModel.findMany();

    return vehicleModel;
  }

  async show(id: string): Promise<VehicleModelDTO | null> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        id,
      },
    });

    return vehicleModel;
  }

  async create({ id, model, brand, model_year }: VehicleModelDTO): Promise<VehicleModelDTO> {
    const vehicleModel = await prisma.vehicleModel.create({
      data: {
        id,
        model,
        brand,
        model_year,
      },
    });

    return vehicleModel;
  }

  async put({ id, model, brand, model_year }: VehicleModelDTO): Promise<VehicleModelDTO> {
    const vehicleModel = await prisma.vehicleModel.update({
      where: {
        id,
      },
      data: {
        model,
        brand,
        model_year,
      },
    });

    return vehicleModel;
  }

  async delete(id: string): Promise<VehicleModelDTO | null> {
    const vehicleModel = await prisma.vehicleModel.delete({
      where: {
        id,
      },
    });

    return vehicleModel;
  }
  async findById(id: string): Promise<VehicleModelDTO | null> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        id,
      },
    });

    return vehicleModel;
  }

  async findByModel(model: string): Promise<VehicleModelDTO | null> {
    const vehicleModel = await prisma.vehicleModel.findUnique({
      where: {
        model,
      },
    });

    return vehicleModel;
  }
}

export default VehicleModelRepository;
