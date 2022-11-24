import { prisma } from '../database/prismaClient';
import { VehicleDTO } from '../dto/VehicleDTO';

class VehicleRepository {
  async list(): Promise<VehicleDTO[] | null> {
    const vehicle = await prisma.vehicle.findMany();

    return vehicle;
  }

  async show(id: string): Promise<VehicleDTO | null> {
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

  async create({
    id,
    license_plate,
    chassis,
    renavam,
    vehicles_model_id,
  }: VehicleDTO): Promise<VehicleDTO> {
    const vehicle = await prisma.vehicle.create({
      data: {
        id,
        license_plate,
        chassis,
        renavam,
        vehicles_model_id,
      },
    });

    return vehicle;
  }

  async put({
    id,
    license_plate,
    chassis,
    renavam,
    vehicles_model_id,
  }: VehicleDTO): Promise<VehicleDTO> {
    const vehicle = await prisma.vehicle.update({
      where: {
        id,
      },
      data: {
        license_plate,
        chassis,
        renavam,
        vehicles_model_id,
      },
    });

    return vehicle;
  }

  async delete(id: string): Promise<VehicleDTO | null> {
    const vehicle = await prisma.vehicle.delete({
      where: {
        id,
      },
    });

    return vehicle;
  }

  async findByLicensePlate(license_plate: string): Promise<VehicleDTO | null> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        license_plate,
      },
    });

    return vehicle;
  }
  async findById(id: string): Promise<VehicleDTO | null> {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id,
      },
    });

    return vehicle;
  }
}

export default VehicleRepository;
