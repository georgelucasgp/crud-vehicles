import { Request, Response } from "express";
import { prisma } from "../../database/prismaClient";

export class ReadAllVehicleInformationController {
  async handle(request: Request, response: Response) {
    const vehiclesInformation = await prisma.vehiclesInformation.findMany({
      include: {
        vehiclesmodel: {
          select: {
            model: true,
            brand: true,
            model_year: true,
            created_at: true,
            updated_at: true,
          },
        },
      },
    });

    return response.json(vehiclesInformation);
  }
}
