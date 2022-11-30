import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteVehicleModelUseCase from './DeleteVehicleModelUseCase';

export class DeleteVehicleModelController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const deleteVehicleModelUseCase = container.resolve(
        DeleteVehicleModelUseCase,
      );

      await deleteVehicleModelUseCase.execute(id);

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
