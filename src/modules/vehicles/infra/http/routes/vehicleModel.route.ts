import { Router } from 'express';

import { VehicleModelController } from '../controllers/VehicleModelController';
const vehicleModelsRoutes = Router();
const vehicleModelController = new VehicleModelController();

vehicleModelsRoutes.post('/vehicle-models', (request, response) =>
  vehicleModelController.create(request, response),
);
vehicleModelsRoutes.get('/vehicle-models/:id/show', (request, response) =>
  vehicleModelController.show(request, response),
);
vehicleModelsRoutes.get('/vehicle-models', (request, response) =>
  vehicleModelController.list(request, response),
);
vehicleModelsRoutes.put('/vehicle-models/:id', (request, response) =>
  vehicleModelController.update(request, response),
);
vehicleModelsRoutes.delete('/vehicle-models/:id', (request, response) =>
  vehicleModelController.delete(request, response),
);
export { vehicleModelsRoutes };
