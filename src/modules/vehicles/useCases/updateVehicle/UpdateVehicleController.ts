import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateVehicleUseCase } from './UpdateVehicleUseCase';

export class UpdateVehicleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;

    const updateVehicleUseCase = container.resolve(UpdateVehicleUseCase);

    const vehicle = await updateVehicleUseCase.execute({
      id,
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });

    return response.status(200).json(vehicle);
  }
}
