import { Request, Response } from 'express';

import CreateVehicleModelService from './CreateVehicleModelService';

export class CreateVehicleModelController {
  constructor(private createVehicleModelService: CreateVehicleModelService) {}

  async store(request: Request, response: Response) {
    const { model, brand, model_year } = request.body;

    try {
      await this.createVehicleModelService.execute({
        model,
        brand,
        model_year,
      });

      return response.status(201).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
