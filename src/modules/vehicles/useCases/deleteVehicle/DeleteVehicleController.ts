import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteVehicleUseCase } from './DeleteVehicleUseCase';

export class DeleteVehicleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const deleteVehicleUseCase = container.resolve(DeleteVehicleUseCase);

      await deleteVehicleUseCase.execute(id);

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
