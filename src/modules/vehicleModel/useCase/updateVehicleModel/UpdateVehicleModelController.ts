import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateVehicleModelUseCase from './UpdateVehicleModelUseCase';

export class UpdateVehicleModelController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { model, brand, model_year } = request.body;

    try {
      const updateVehicleModelUseCase = container.resolve(
        UpdateVehicleModelUseCase,
      );

      await updateVehicleModelUseCase.execute({
        id,
        model,
        brand,
        model_year,
      });

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
