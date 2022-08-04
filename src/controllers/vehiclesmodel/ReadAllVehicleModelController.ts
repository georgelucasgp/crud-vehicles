import { Request, Response } from "express";
import { prisma } from "../../database/prismaClient";

export class ReadAllVehicleModelController {

  async handle(request: Request, response: Response) {

    const vehiclesModel = await prisma.vehiclesModel.findMany({
    });

    return response.json(vehiclesModel);
  }

}
