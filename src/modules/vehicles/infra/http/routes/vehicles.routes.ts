import { CreateVehicleController } from '@modules/vehicles/useCases/createVehicle/CreateVehicleController';
import { DeleteVehicleController } from '@modules/vehicles/useCases/deleteVehicle/DeleteVehicleController';
import { ShowVehicleController } from '@modules/vehicles/useCases/showVehicle/ShowVehicleController';
import { UpdateVehicleController } from '@modules/vehicles/useCases/updateVehicle/UpdateVehicleController';
import { Router } from 'express';

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
