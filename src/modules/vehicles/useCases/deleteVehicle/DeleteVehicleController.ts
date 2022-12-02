import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteVehicleUseCase } from './DeleteVehicleUseCase';

export class DeleteVehicleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteVehicleUseCase = container.resolve(DeleteVehicleUseCase);

    const vehicle = await deleteVehicleUseCase.execute(id);

    return response.status(200).json(vehicle);
  }
}
