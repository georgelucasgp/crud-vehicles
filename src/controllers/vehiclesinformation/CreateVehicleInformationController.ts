import { VehiclesInformation } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../../database/prismaClient";

export class CreateVehicleInformationController {
  async handle(request: Request, response: Response) {
    const {
      license_plate,
      chassis,
      renavam,
      vehiclesModelId,
    }: VehiclesInformation = request.body;

    const vehiclesModalAlreadyExists = await prisma.vehiclesModel.findUnique({
      where: {
        id: vehiclesModelId,
      },
    });

    if (!vehiclesModalAlreadyExists) {
      return response.json("Vehicle Model does not exists");
    }

    const vehiclesInformationAlreadyExists =
      await prisma.vehiclesInformation.findUnique({
        where: {
          license_plate,
        },
      });

    if (vehiclesInformationAlreadyExists) {
      return response.json("Vehicle Information Already Exists");
    }

    const vehiclesInformation = await prisma.vehiclesInformation.create({
      data: {
        license_plate,
        chassis,
        renavam,
        vehiclesModelId,
      },
    });

    return response.json(vehiclesInformation);
  }
}
