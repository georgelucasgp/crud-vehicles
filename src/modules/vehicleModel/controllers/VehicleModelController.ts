import { Request, Response } from 'express';

import VehicleModelService from './VehicleModelService';

export class VehicleModelController {
  constructor(private vehicleModelService: VehicleModelService) {}

  async show(request: Request, response: Response) {
    const { model } = request.params;

    try {
      const vehicleModel = await this.vehicleModelService.show(model);
      return response.status(200).json(vehicleModel);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const vehicleModel = await this.vehicleModelService.list();

      return response.status(201).json(vehicleModel);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async store(request: Request, response: Response) {
    const { model, brand, model_year } = request.body;

    try {
      await this.vehicleModelService.create({
        model,
        brand,
        model_year,
      });

      return response.status(201).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { model, brand, model_year } = request.body;

    await this.vehicleModelService.update({
      id,
      model,
      brand,
      model_year,
    });
  }

  async delete(request: Request, response: Response) {
    const { model } = request.body;

    await this.vehicleModelService.delete(model);
  }
}
