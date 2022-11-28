import { Router } from 'express';

import { CreateVehicleController } from '../../../useCases/createVehicle/CreateVehicleController';
import { DeleteVehicleController } from '../../../useCases/deleteVehicle/DeleteVehicleController';
import { ShowVehicleController } from '../../../useCases/showVehicle/ShowVehicleController';
import { UpdateVehicleController } from '../../../useCases/updateVehicle/UpdateVehicleController';

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
