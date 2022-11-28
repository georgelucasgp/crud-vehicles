import { CreateVehicleModelController } from '@modules/vehicleModel/useCase/createVehicleModel/CreateVehicleModelController';
import { DeleteVehicleModelController } from '@modules/vehicleModel/useCase/deleteVehicleModel/DeleteVehicleModelController';
import { ShowVehicleModelController } from '@modules/vehicleModel/useCase/showVehicleModel/ShowVehicleModelController';
import { UpdateVehicleModelController } from '@modules/vehicleModel/useCase/updateVehicleModel/UpdateVehicleModelController';
import { Router } from 'express';

const vehicleModelsRoutes = Router();

const createVehicleModelController = new CreateVehicleModelController();
const updateVehicleModelController = new UpdateVehicleModelController();
const deleteVehicleModelController = new DeleteVehicleModelController();
const showVehicleModelController = new ShowVehicleModelController();

vehicleModelsRoutes.post('/vehicles-model', (request, response) =>
  createVehicleModelController.handle(request, response),
);

vehicleModelsRoutes.get('/vehicles-model/:id/show', (request, response) =>
  showVehicleModelController.show(request, response),
);

vehicleModelsRoutes.get('/vehicles-model', (request, response) =>
  showVehicleModelController.list(request, response),
);

vehicleModelsRoutes.put('/vehicles-model/:id', (request, response) =>
  updateVehicleModelController.handle(request, response),
);

vehicleModelsRoutes.delete('/vehicles-model/:id', (request, response) =>
  deleteVehicleModelController.handle(request, response),
);
export { vehicleModelsRoutes };
