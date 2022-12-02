import { DeleteVehicleModelUseCase } from '@modules/vehicles/useCases/vehicleModel/DeleteVehicleModelUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class DeleteVehicleModelController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteVehicleModelUseCase = container.resolve(DeleteVehicleModelUseCase);

    const vehicleModel = await deleteVehicleModelUseCase.execute(id);

    return response.status(200).json(vehicleModel);
  }
}
