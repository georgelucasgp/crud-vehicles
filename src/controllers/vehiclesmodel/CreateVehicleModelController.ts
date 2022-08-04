import { VehiclesModel } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../../database/prismaClient";

export class CreateVehicleModelController {
  async handle(request: Request, response: Response) {
    const { model, brand, model_year }: VehiclesModel = request.body;

    const vehiclesModelAlreadyExists = await prisma.vehiclesModel.findUnique({
      where: {
        model,
      },
    });

    if (vehiclesModelAlreadyExists) {
      return response.json("Vehicle Model Already Exists");
    }

    const vehiclesModel = await prisma.vehiclesModel.create({
      data: {
        model,
        brand,
        model_year,
      },
    });

    return response.json(vehiclesModel);
  }
}
