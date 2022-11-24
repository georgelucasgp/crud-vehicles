import { prisma } from '../../database/prismaClient';
import { Vehicle } from '../../entities/Vehicle';
import { IVehiclesRepositories } from '../IVehiclesRepositories';

class PrismaVehicleRepository implements IVehiclesRepositories {
  async exists(license_plate: string): Promise<boolean> {
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

  async show(license_plate: string): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        license_plate,
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

  async create({ license_plate, chassis, renavam, vehicles_model_id }: Vehicle): Promise<void> {
    await prisma.vehicle.create({
      data: {
        license_plate,
        chassis,
        renavam,
        vehicles_model_id,
      },
    });
  }

  async put({ license_plate, chassis, renavam, vehicles_model_id }: Vehicle): Promise<void> {
    await prisma.vehicle.update({
      where: {
        license_plate,
      },
      data: {
        license_plate,
        chassis,
        renavam,
        vehicles_model_id,
      },
    });
  }

  async delete(license_plate: string): Promise<void> {
    await prisma.vehicle.delete({
      where: {
        license_plate,
      },
    });
  }
}

export default PrismaVehicleRepository;
