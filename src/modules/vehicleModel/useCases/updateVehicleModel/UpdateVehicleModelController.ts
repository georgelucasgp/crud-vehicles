import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateVehicleModelUseCase from './UpdateVehicleModelUseCase';

export class UpdateVehicleModelController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { model, brand, model_year } = request.body;

    const updateVehicleModelUseCase = container.resolve(UpdateVehicleModelUseCase);

    const vehicleModel = await updateVehicleModelUseCase.execute({
      id,
      model,
      brand,
      model_year,
    });

    return response.status(200).json(vehicleModel);
  }
}
