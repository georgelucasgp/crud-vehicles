import CreateVehicleModelUseCase from '@modules/vehicles/useCases/vehicleModel/CreateVehicleModelUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateVehicleModelController {
  async handle(request: Request, response: Response) {
    const { model, brand, model_year } = request.body;

    const createVehicleModelUseCase = container.resolve(CreateVehicleModelUseCase);

    const vehicleModel = await createVehicleModelUseCase.execute({
      model,
      brand,
      model_year,
    });

    return response.status(201).json(vehicleModel);
  }
}
