import { prisma } from '../../../../../config/prisma/prismaClient';
import { Vehicle } from '../../../entities/Vehicle';
import { IVehicleRepository } from '../IVehicleRepository';

class PrismaVehicleRepository implements IVehicleRepository {
  async findById(id: string): Promise<Vehicle | null> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id,
      },
    });

    return vehicle;
  }

  async findByLicensePlate(license_plate: string): Promise<Vehicle | null> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        license_plate,
      },
    });

    return vehicle;
  }

  async list(): Promise<Vehicle[]> {
    const vehicle = await prisma.vehicle.findMany();

    return vehicle;
  }

  async show(id: string): Promise<Vehicle | null> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id,
      },
      include: {
        vehicles_model: {
          select: {
            model: true,
            brand: true,
            model_year: true,
          },
        },
      },
    });

    return vehicle;
  }

  async create(data: Vehicle): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.create({
      data,
    });
    return vehicle;
  }

  async update(data: Vehicle): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.update({
      where: {
        id: data.id,
      },
      data,
    });
    return vehicle;
  }

  async delete(data: Vehicle): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.delete({
      where: {
        id: data.id,
      },
    });
    return vehicle;
  }
}

export default PrismaVehicleRepository;