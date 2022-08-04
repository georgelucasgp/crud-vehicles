import { Request, Response } from "express";
import { prisma } from "../../database/prismaClient";

export class ReadOneVehicleModelController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const vehiclesModelAlreadyExists = await prisma.vehiclesModel.findUnique({
      where: {
        id,
      },
    });

    if(!vehiclesModelAlreadyExists){
      return response.json("Vehicle Model does not exists!");
    }

    const vehiclesModel = await prisma.vehiclesModel.findUnique({
      where: {
        id,
      },
    });

    return response.json(vehiclesModel);
  }
}
