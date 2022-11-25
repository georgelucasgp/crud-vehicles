import { Request, Response } from 'express';

import VehicleModelService from '../services/VehicleModelService';

export class VehicleModelController {
  constructor(private vehicleModelService: VehicleModelService) {}

  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const vehicleModel = await this.vehicleModelService.show(id);
      return response.status(200).json(vehicleModel);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const vehicleModel = await this.vehicleModelService.list();

      return response.status(200).json(vehicleModel);
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

    try {
      await this.vehicleModelService.update({
        id,
        model,
        brand,
        model_year,
      });

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.vehicleModelService.delete(id);

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
