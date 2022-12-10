import { DeleteVehicleUseCase } from '@modules/vehicles/useCases/vehicles/DeleteVehicleUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class DeleteVehicleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteVehicleUseCase = container.resolve(DeleteVehicleUseCase);

    const vehicle = await deleteVehicleUseCase.execute(id);

    return response.status(200).json(vehicle);
  }
}
