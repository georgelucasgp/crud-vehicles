import { Request, Response } from 'express';

import DeleteVehicleService from './DeleteVehicleService';

export class DeleteVehicleController {
  constructor(private deleteVehicleService: DeleteVehicleService) {}

  async delete(request: Request, response: Response) {
    const { license_plate } = request.body;

    await this.deleteVehicleService.execute(license_plate);
  }
}
