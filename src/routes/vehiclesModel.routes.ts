import { Router } from 'express';

import { vehicleModelFactory } from '../modules/vehicleModel';

const vehiclesModelRoutes = Router();

vehiclesModelRoutes.post('/vehicles-model', (request, response) =>
  vehicleModelFactory().store(request, response),
);

vehiclesModelRoutes.get('/vehicles-model/:id/show', (request, response) =>
  vehicleModelFactory().show(request, response),
);

vehiclesModelRoutes.get('/vehicles-model', (request, response) =>
  vehicleModelFactory().list(request, response),
);

vehiclesModelRoutes.put('/vehicles-model/:id', (request, response) =>
  vehicleModelFactory().update(request, response),
);

vehiclesModelRoutes.delete('/vehicles-model/:id', (request, response) =>
  vehicleModelFactory().delete(request, response),
);
export { vehiclesModelRoutes };
