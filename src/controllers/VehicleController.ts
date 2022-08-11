import { randomUUID } from 'crypto';
import { Request, Response } from 'express';

import { VehicleDTO } from '../dto/VehicleDTO';
import CreateVehicleService from '../services/vehicles/CreateVehicleService';
import DeleteVehicleService from '../services/vehicles/DeleteVehicleService';
import ListVehicleService from '../services/vehicles/ListVehicleService';
import ShowVehicleService from '../services/vehicles/ShowVehicleService';
import UpdateVehicleService from '../services/vehicles/UpdateVehicleService';

export class VehicleController {
  async index(request: Request, response: Response) {
    const listVehicleService = new ListVehicleService();
    const vehicle = await listVehicleService.handler();

    return response.json(vehicle);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const showVehicleService = new ShowVehicleService();
    const vehicle = await showVehicleService.handler(id);

    return response.json(vehicle);
  }

  async store(request: Request, response: Response) {
    const id = randomUUID();
    const { license_plate, chassis, renavam, vehicles_model_id }: VehicleDTO =
      request.body;

    const createVehicleService = new CreateVehicleService();
    const vehicle = await createVehicleService.handler({
      id,
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });

    return response.json(vehicle);
  }

  async put(request: Request, response: Response) {
    const { id } = request.params;
    const { license_plate, chassis, renavam, vehicles_model_id }: VehicleDTO =
      request.body;

    const updateVehicleService = new UpdateVehicleService();
    const vehicle = await updateVehicleService.handler({
      id,
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });

    return response.json(vehicle);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteVehicleService = new DeleteVehicleService();
    const vehicle = await deleteVehicleService.handler(id);

    return response.json(vehicle);
  }
}
