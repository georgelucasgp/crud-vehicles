import { CreateVehicleModelController } from '@modules/vehicleModel/useCases/createVehicleModel/CreateVehicleModelController';
import { DeleteVehicleModelController } from '@modules/vehicleModel/useCases/deleteVehicleModel/DeleteVehicleModelController';
import { ShowVehicleModelController } from '@modules/vehicleModel/useCases/showVehicleModel/ShowVehicleModelController';
import { UpdateVehicleModelController } from '@modules/vehicleModel/useCases/updateVehicleModel/UpdateVehicleModelController';
import { Router } from 'express';

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
