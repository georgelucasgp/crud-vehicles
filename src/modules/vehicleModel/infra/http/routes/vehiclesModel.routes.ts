import { Router } from 'express';

import { VehicleModelController } from './../../../controllers/VehicleModelController';

const vehicleModelsRoutes = Router();

vehicleModelsRoutes.post('/vehicles-model', (request, response) =>
  new VehicleModelController().store(request, response),
);

vehicleModelsRoutes.get('/vehicles-model/:id/show', (request, response) =>
  new VehicleModelController().show(request, response),
);

vehicleModelsRoutes.get('/vehicles-model', (request, response) =>
  new VehicleModelController().list(request, response),
);

vehicleModelsRoutes.put('/vehicles-model/:id', (request, response) =>
  new VehicleModelController().update(request, response),
);

vehicleModelsRoutes.delete('/vehicles-model/:id', (request, response) =>
  new VehicleModelController().delete(request, response),
);
export { vehicleModelsRoutes };
