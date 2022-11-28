import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateVehicleModelUseCase from './CreateVehicleModelUseCase';

export class CreateVehicleModelController {
  async handle(request: Request, response: Response) {
    const { model, brand, model_year } = request.body;

    try {
      const createVehicleModelUseCase = container.resolve(
        CreateVehicleModelUseCase,
      );

      await createVehicleModelUseCase.execute({
        model,
        brand,
        model_year,
      });

      return response.status(201).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
