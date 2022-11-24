import { randomUUID } from 'crypto';
import { Request, Response } from 'express';

import { VehicleModelDTO } from '../dto/VehicleModelDTO';
import CreateVehicleModelService from '../services/vehicles-model/CreateVehicleModelService';
import DeleteVehicleModelService from '../services/vehicles-model/DeleteVehicleModelService';
import ListVehicleModelService from '../services/vehicles-model/ListVehicleModelService';
import ShowVehicleModelService from '../services/vehicles-model/ShowVehicleModelService';
import UpdateVehicleModelService from '../services/vehicles-model/UpdateVehicleModelService';

export class VehicleModelController {
  async index(request: Request, response: Response) {
    const listModelVehicleService = new ListVehicleModelService();
    const vehicleModel = await listModelVehicleService.handler();

    return response.json(vehicleModel);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const showVehicleModelService = new ShowVehicleModelService();
    const vehicleModel = await showVehicleModelService.handler(id);

    return response.json(vehicleModel);
  }

  async store(request: Request, response: Response) {
    const id = randomUUID();
    const { model, brand, model_year }: VehicleModelDTO = request.body;
    const createVehicleModelService = new CreateVehicleModelService();
    const vehicleModel = await createVehicleModelService.handler({
      id,
      model,
      brand,
      model_year,
    });
    return response.json(vehicleModel);
  }

  async put(request: Request, response: Response) {
    const { id } = request.params;
    const { model, brand, model_year }: VehicleModelDTO = request.body;

    const updateVehicleService = new UpdateVehicleModelService();
    const vehicleModel = await updateVehicleService.handler({
      id,
      model,
      brand,
      model_year,
    });

    return response.json(vehicleModel);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteVehicleModelService = new DeleteVehicleModelService();
    const vehicleModel = await deleteVehicleModelService.handler(id);

    return response.json(vehicleModel);
  }
}
