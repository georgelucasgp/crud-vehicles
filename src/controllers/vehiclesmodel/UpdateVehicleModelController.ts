import { VehiclesModel } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../../database/prismaClient";



export class UpdateVehicleModelController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { model, brand, model_year }:VehiclesModel = request.body;

    const vehiclesModelAlreadyExists = await prisma.vehiclesModel.findUnique({
      where: {
        id,
      },
    });

    if(!vehiclesModelAlreadyExists){
      return response.json("Vehicle Model does not exists!");
    }

    const vehiclesModel = await prisma.vehiclesModel.update({
      where: {
        id,
      },
      data: {
        model,
        brand,
        model_year,
      },
    });

    return response.json(vehiclesModel);
  }
}
