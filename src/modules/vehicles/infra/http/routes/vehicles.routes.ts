import { Router } from 'express';

import { VehicleController } from '../controllers/VehicleController';
const vehiclesRoutes = Router();
const vehicleController = new VehicleController();

vehiclesRoutes.post('/vehicles', (request, response) =>
  vehicleController.create(request, response),
);
vehiclesRoutes.get('/vehicles/:id/show', (request, response) =>
  vehicleController.show(request, response),
);
vehiclesRoutes.get('/vehicles', (request, response) => vehicleController.list(request, response));
vehiclesRoutes.put('/vehicles/:id', (request, response) =>
  vehicleController.update(request, response),
);
vehiclesRoutes.delete('/vehicles/:id', (request, response) =>
  vehicleController.delete(request, response),
);

export { vehiclesRoutes };
