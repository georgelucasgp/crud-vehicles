import { CreateVehicleUseCase } from '@modules/vehicles/useCases/vehicles/CreateVehicleUseCase';
import { DeleteVehicleUseCase } from '@modules/vehicles/useCases/vehicles/DeleteVehicleUseCase';
import { ShowVehicleUseCase } from '@modules/vehicles/useCases/vehicles/ShowVehicleUseCase';
import { UpdateVehicleUseCase } from '@modules/vehicles/useCases/vehicles/UpdateVehicleUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class VehicleController {
  async create(request: Request, response: Response) {
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;
    const createVehicleUseCase = container.resolve(CreateVehicleUseCase);
    const vehicle = await createVehicleUseCase.execute({
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });
    return response.status(201).json(vehicle);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const showVehicleUseCase = container.resolve(ShowVehicleUseCase);
    const vehicle = await showVehicleUseCase.show(id);
    return response.status(200).json(vehicle);
  }

  async list(request: Request, response: Response) {
    const showVehicleUseCase = container.resolve(ShowVehicleUseCase);
    const vehicle = await showVehicleUseCase.list();
    return response.status(200).json(vehicle);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { license_plate, chassis, renavam, vehicles_model_id } = request.body;
    const updateVehicleUseCase = container.resolve(UpdateVehicleUseCase);
    const vehicle = await updateVehicleUseCase.execute({
      id,
      license_plate,
      chassis,
      renavam,
      vehicles_model_id,
    });
    return response.status(200).json(vehicle);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteVehicleUseCase = container.resolve(DeleteVehicleUseCase);
    const vehicle = await deleteVehicleUseCase.execute(id);
    return response.status(200).json(vehicle);
  }
}
