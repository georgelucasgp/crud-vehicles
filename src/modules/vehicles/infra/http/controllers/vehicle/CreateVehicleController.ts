import { CreateVehicleUseCase } from '@modules/vehicles/useCases/vehicles/CreateVehicleUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateVehicleController {
  async handle(request: Request, response: Response) {
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;

    const createVehicleUseCase = container.resolve(CreateVehicleUseCase);

    const vehicle = await createVehicleUseCase.execute({
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });

    return response.status(201).json(vehicle);
  }
}
