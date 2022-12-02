import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowVehicleUseCase } from './ShowVehicleUseCase';

export class ShowVehicleController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showVehicleUseCase = container.resolve(ShowVehicleUseCase);
    const vehicle = await showVehicleUseCase.show(id);

    return response.status(200).json(vehicle);
  }

  async list(request: Request, response: Response) {
    const showVehicleUseCase = container.resolve(ShowVehicleUseCase);

    const vehicle = await showVehicleUseCase.list();

    return response.status(200).json(vehicle);
  }
}
