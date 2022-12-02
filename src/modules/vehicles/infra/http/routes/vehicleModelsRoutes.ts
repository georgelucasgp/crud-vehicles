import { Router } from 'express';

import { CreateVehicleModelController } from '../controllers/vehicleModel/CreateVehicleModelController';
import { DeleteVehicleModelController } from '../controllers/vehicleModel/DeleteVehicleModelController';
import { ShowVehicleModelController } from '../controllers/vehicleModel/ShowVehicleModelController';
import { UpdateVehicleModelController } from '../controllers/vehicleModel/UpdateVehicleModelController';

const vehicleModelsRoutes = Router();

const createVehicleModelController = new CreateVehicleModelController();
const updateVehicleModelController = new UpdateVehicleModelController();
const deleteVehicleModelController = new DeleteVehicleModelController();
const showVehicleModelController = new ShowVehicleModelController();

vehicleModelsRoutes.post('/vehicle-models', (request, response) =>
  createVehicleModelController.handle(request, response),
);

vehicleModelsRoutes.get('/vehicle-models/:id/show', (request, response) =>
  showVehicleModelController.show(request, response),
);

vehicleModelsRoutes.get('/vehicle-models', (request, response) =>
  showVehicleModelController.list(request, response),
);

vehicleModelsRoutes.put('/vehicle-models/:id', (request, response) =>
  updateVehicleModelController.handle(request, response),
);

vehicleModelsRoutes.delete('/vehicle-models/:id', (request, response) =>
  deleteVehicleModelController.handle(request, response),
);
export { vehicleModelsRoutes };
