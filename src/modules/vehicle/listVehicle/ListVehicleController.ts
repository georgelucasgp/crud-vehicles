import { Request, Response } from 'express';

import ListVehicleService from './ListVehicleService';

export class ListVehicleController {
  constructor(private listVehicleService: ListVehicleService) {}

  async store(request: Request, response: Response) {
    try {
      const vehicle = await this.listVehicleService.execute();

      return response.status(201).json(vehicle);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
