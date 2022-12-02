import { Router } from 'express';

import { CreateVehicleController } from '../controllers/vehicle/CreateVehicleController';
import { DeleteVehicleController } from '../controllers/vehicle/DeleteVehicleController';
import { ShowVehicleController } from '../controllers/vehicle/ShowVehicleController';
import { UpdateVehicleController } from '../controllers/vehicle/UpdateVehicleController';

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();
const updateVehicleController = new UpdateVehicleController();
const deleteVehicleController = new DeleteVehicleController();
const showVehicleController = new ShowVehicleController();

vehiclesRoutes.post('/vehicles', (request, response) =>
  createVehicleController.handle(request, response),
);

vehiclesRoutes.get('/vehicles/:id/show', (request, response) =>
  showVehicleController.show(request, response),
);

vehiclesRoutes.get('/vehicles', (request, response) =>
  showVehicleController.list(request, response),
);

vehiclesRoutes.put('/vehicles/:id', (request, response) =>
  updateVehicleController.handle(request, response),
);

vehiclesRoutes.delete('/vehicles/:id', (request, response) =>
  deleteVehicleController.handle(request, response),
);

export { vehiclesRoutes };
