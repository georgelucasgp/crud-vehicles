import { Request, Response } from 'express';
import { container } from 'tsyringe';

import VehicleService from '../services/VehicleService';

export class VehicleController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const vehicleService = container.resolve(VehicleService);
      const vehicle = await vehicleService.show(id);

      return response.status(200).json(vehicle);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const vehicleService = container.resolve(VehicleService);

      const vehicle = await vehicleService.list();

      return response.status(200).json(vehicle);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async store(request: Request, response: Response) {
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;

    try {
      const vehicleService = container.resolve(VehicleService);

      await vehicleService.create({
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

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;

    try {
      const vehicleService = container.resolve(VehicleService);

      await vehicleService.update({
        id,
        license_plate,
        chassis,
        renavam,
        vehicles_model_id,
      });

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const vehicleService = container.resolve(VehicleService);

      await vehicleService.delete(id);

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
