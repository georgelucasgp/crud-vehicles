import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowVehicleModelUseCase from './ShowVehicleModelUseCase';

export class ShowVehicleModelController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const showVehicleModelUseCase = container.resolve(
        ShowVehicleModelUseCase,
      );

      const vehicleModel = await showVehicleModelUseCase.show(id);
      return response.status(200).json(vehicleModel);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const showVehicleModelUseCase = container.resolve(
        ShowVehicleModelUseCase,
      );

      const vehicleModel = await showVehicleModelUseCase.list();

      return response.status(200).json(vehicleModel);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
