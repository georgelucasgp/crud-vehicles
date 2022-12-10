import CreateVehicleModelUseCase from '@modules/vehicles/useCases/vehicleModel/CreateVehicleModelUseCase';
import { DeleteVehicleModelUseCase } from '@modules/vehicles/useCases/vehicleModel/DeleteVehicleModelUseCase';
import ShowVehicleModelUseCase from '@modules/vehicles/useCases/vehicleModel/ShowVehicleModelUseCase';
import UpdateVehicleModelUseCase from '@modules/vehicles/useCases/vehicleModel/UpdateVehicleModelUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class VehicleModelController {
  async create(request: Request, response: Response) {
    const { model, brand, model_year } = request.body;
    const createVehicleModelUseCase = container.resolve(CreateVehicleModelUseCase);
    const vehicleModel = await createVehicleModelUseCase.execute({
      model,
      brand,
      model_year,
    });
    return response.status(201).json(vehicleModel);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const showVehicleModelUseCase = container.resolve(ShowVehicleModelUseCase);
    const vehicleModel = await showVehicleModelUseCase.show(id);
    return response.status(200).json(vehicleModel);
  }

  async list(request: Request, response: Response) {
    const showVehicleModelUseCase = container.resolve(ShowVehicleModelUseCase);
    const vehicleModel = await showVehicleModelUseCase.list();
    return response.status(200).json(vehicleModel);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { model, brand, model_year } = request.body;
    const updateVehicleModelUseCase = container.resolve(UpdateVehicleModelUseCase);
    const vehicleModel = await updateVehicleModelUseCase.execute({
      id,
      model,
      brand,
      model_year,
    });
    return response.status(200).json(vehicleModel);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteVehicleModelUseCase = container.resolve(DeleteVehicleModelUseCase);
    const vehicleModel = await deleteVehicleModelUseCase.execute(id);
    return response.status(200).json(vehicleModel);
  }
}
