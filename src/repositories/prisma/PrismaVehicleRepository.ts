import { prisma } from '../../database/prismaClient';
import { Vehicle } from '../../entities/Vehicle';
import { IVehiclesRepositories } from '../IVehiclesRepositories';

class PrismaVehicleRepository implements IVehiclesRepositories {
  async findById(id: string): Promise<boolean> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id,
      },
    });

    return !!vehicle;
  }

  async findByLicensePlate(license_plate: string): Promise<boolean> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        license_plate,
      },
    });

    return !!vehicle;
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

  async create(data: Vehicle): Promise<void> {
    await prisma.vehicle.create({
      data,
    });
  }

  async update(data: Vehicle): Promise<void> {
    await prisma.vehicle.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.vehicle.delete({
      where: {
        id,
      },
    });
  }
}

export default PrismaVehicleRepository;
