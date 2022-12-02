import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowVehicleModelUseCase from './ShowVehicleModelUseCase';

export class ShowVehicleModelController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showVehicleModelUseCase = container.resolve(ShowVehicleModelUseCase);

    const vehicleModel = await showVehicleModelUseCase.show(id);
    return response.status(200).json(vehicleModel);
  }

  async list(request: Request, response: Response) {
    const showVehicleModelUseCase = container.resolve(ShowVehicleModelUseCase);

    const vehicleModel = await showVehicleModelUseCase.list();

    return response.status(200).json(vehicleModel);
  }
}
