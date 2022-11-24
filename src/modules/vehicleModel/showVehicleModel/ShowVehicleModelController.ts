import { Request, Response } from 'express';

import ShowVehicleService from './ShowVehicleService';

export class ShowVehicleController {
  constructor(private showVehicleService: ShowVehicleService) {}

  async put(request: Request, response: Response) {
    const { license_plate } = request.body;

    await this.showVehicleService.execute(license_plate);
  }
}
