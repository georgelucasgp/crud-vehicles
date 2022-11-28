import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateVehicleUseCase } from './CreateVehicleUseCase';

export class CreateVehicleController {
  async handle(request: Request, response: Response) {
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;

    try {
      const createVehicleUseCase = container.resolve(CreateVehicleUseCase);

      await createVehicleUseCase.execute({
        license_plate,
        chassis,
        renavam,
        vehicles_model_id,
      });

      return response.status(201).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
