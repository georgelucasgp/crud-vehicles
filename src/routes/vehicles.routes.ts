import { Router } from 'express';

import { vehicleFactory } from '../modules/vehicle';

const vehiclesRoutes = Router();

vehiclesRoutes.post('/vehicles', (request, response) =>
  vehicleFactory().store(request, response),
);

vehiclesRoutes.get('/vehicles/:id/show', (request, response) =>
  vehicleFactory().show(request, response),
);

vehiclesRoutes.get('/vehicles', (request, response) =>
  vehicleFactory().list(request, response),
);

vehiclesRoutes.put('/vehicles/:id', (request, response) =>
  vehicleFactory().update(request, response),
);

vehiclesRoutes.delete('/vehicles/:id', (request, response) =>
  vehicleFactory().delete(request, response),
);

export { vehiclesRoutes };
