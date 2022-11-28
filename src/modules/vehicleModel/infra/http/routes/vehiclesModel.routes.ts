import { Router } from 'express';

import { DeleteVehicleModelController } from '../../../useCase/deleteVehicleModel/DeleteVehicleModelController';
import { ShowVehicleModelController } from '../../../useCase/showVehicleModel/ShowVehicleModelController';
import { UpdateVehicleModelController } from '../../../useCase/updateVehicleModel/UpdateVehicleModelController';
import { CreateVehicleModelController } from './../../../useCase/createVehicleModel/CreateVehicleModelController';

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
