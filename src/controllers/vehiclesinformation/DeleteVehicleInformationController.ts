import { Request, Response } from "express";
import { prisma } from "../../database/prismaClient";

export class DeleteVehicleInformationController {

  async findAll(request: Request, response: Response) {

    const vehiclesInformation = await prisma.vehiclesInformation.findMany({
    });

    return response.json(vehiclesInformation);
  }

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const vehiclesInformation = await prisma.vehiclesInformation.findUnique({
      where: {
        id,
      },
      include: { 
        vehiclesmodel:{
          select: {
           model: true,
           brand: true,
           model_year: true,
          }
        }
       },
    });

    return response.json(vehiclesInformation);
  }
}
