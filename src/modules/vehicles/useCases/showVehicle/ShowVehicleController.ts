import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowVehicleUseCase } from './ShowVehicleUseCase';

export class ShowVehicleController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const showVehicleUseCase = container.resolve(ShowVehicleUseCase);
      const vehicle = await showVehicleUseCase.show(id);

      return response.status(200).json(vehicle);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const showVehicleUseCase = container.resolve(ShowVehicleUseCase);

      const vehicle = await showVehicleUseCase.list();

      return response.status(200).json(vehicle);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
