import { Router } from 'express';

import { VehicleController } from '../modules/vehicle/controllers/VehicleController';

const vehiclesRoutes = Router();

vehiclesRoutes.post('/vehicles', (request, response) =>
  new VehicleController().store(request, response),
);

vehiclesRoutes.get('/vehicles/:id/show', (request, response) =>
  new VehicleController().show(request, response),
);

vehiclesRoutes.get('/vehicles', (request, response) =>
  new VehicleController().list(request, response),
);

vehiclesRoutes.put('/vehicles/:id', (request, response) =>
  new VehicleController().update(request, response),
);

vehiclesRoutes.delete('/vehicles/:id', (request, response) =>
  new VehicleController().delete(request, response),
);

export { vehiclesRoutes };
