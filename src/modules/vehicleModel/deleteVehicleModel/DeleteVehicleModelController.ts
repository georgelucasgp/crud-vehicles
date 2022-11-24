import { Request, Response } from 'express';

import DeleteVehicleModelService from './DeleteVehicleModelService';

export class DeleteVehicleModelController {
  constructor(private deleteVehicleModelService: DeleteVehicleModelService) {}

  async delete(request: Request, response: Response) {
    const { model } = request.body;

    await this.deleteVehicleModelService.execute(model);
  }
}
