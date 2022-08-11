import { Router } from 'express';

import { VehicleController } from './../controllers/VehicleController';

const vehiclesRoutes = Router();

vehiclesRoutes.post('/vehicles', new VehicleController().store);

vehiclesRoutes.get('/vehicles/:id', new VehicleController().show);

vehiclesRoutes.get('/vehicles', new VehicleController().index);

vehiclesRoutes.put('/vehicles/:id', new VehicleController().put);

vehiclesRoutes.delete('/vehicles/:id', new VehicleController().delete);

export { vehiclesRoutes };
