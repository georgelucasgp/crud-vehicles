import { Request, Response } from 'express';

import CreateVehicleService from './CreateVehicleService';

export class CreateVehicleController {
  constructor(private createVehicleService: CreateVehicleService) {}

  async store(request: Request, response: Response) {
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;

    try {
      await this.createVehicleService.execute({
        license_plate,
        chassis,
        renavam,
        vehicles_model_id,
      });

      return response.status(201).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
