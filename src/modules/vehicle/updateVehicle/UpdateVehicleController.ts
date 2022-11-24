import { Request, Response } from 'express';

import UpdateVehicleService from './UpdateVehicleService';

export class UpdateVehicleController {
  constructor(private updateVehicleService: UpdateVehicleService) {}

  async put(request: Request, response: Response) {
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;

    await this.updateVehicleService.execute({
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });
  }
}
