import { Router } from 'express';

import { VehicleModelController } from '../modules/vehicleModel/controllers/VehicleModelController';

const vehiclesModelRoutes = Router();

vehiclesModelRoutes.post('/vehicles-model', (request, response) =>
  new VehicleModelController().store(request, response),
);

vehiclesModelRoutes.get('/vehicles-model/:id/show', (request, response) =>
  new VehicleModelController().show(request, response),
);

vehiclesModelRoutes.get('/vehicles-model', (request, response) =>
  new VehicleModelController().list(request, response),
);

vehiclesModelRoutes.put('/vehicles-model/:id', (request, response) =>
  new VehicleModelController().update(request, response),
);

vehiclesModelRoutes.delete('/vehicles-model/:id', (request, response) =>
  new VehicleModelController().delete(request, response),
);
export { vehiclesModelRoutes };
