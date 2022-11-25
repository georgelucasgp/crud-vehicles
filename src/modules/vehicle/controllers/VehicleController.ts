import { Request, Response } from 'express';

import VehicleService from '../services/VehicleService';

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const vehicle = await this.vehicleService.show(id);

      return response.status(200).json(vehicle);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const vehicle = await this.vehicleService.list();

      return response.status(200).json(vehicle);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async store(request: Request, response: Response) {
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;

    try {
      await this.vehicleService.create({
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
      await this.vehicleService.update({
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
      await this.vehicleService.delete(id);

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
