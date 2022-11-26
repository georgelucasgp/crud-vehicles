import { Request, Response } from 'express';
import { container } from 'tsyringe';

import VehicleModelService from '../services/VehicleModelService';

export class VehicleModelController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const vehicleModelService = container.resolve(VehicleModelService);

      const vehicleModel = await vehicleModelService.show(id);
      return response.status(200).json(vehicleModel);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const vehicleModelService = container.resolve(VehicleModelService);

      const vehicleModel = await vehicleModelService.list();

      return response.status(200).json(vehicleModel);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async store(request: Request, response: Response) {
    const { model, brand, model_year } = request.body;

    try {
      const vehicleModelService = container.resolve(VehicleModelService);

      await vehicleModelService.create({
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
      const vehicleModelService = container.resolve(VehicleModelService);

      await vehicleModelService.update({
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
      const vehicleModelService = container.resolve(VehicleModelService);

      await vehicleModelService.delete(id);

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
