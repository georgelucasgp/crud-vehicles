import { Router } from 'express';

import { VehicleModelController } from '../controllers/VehicleModelController';

const vehiclesModelRoutes = Router();

vehiclesModelRoutes.post('/vehicles-model', new VehicleModelController().store);

vehiclesModelRoutes.get('/vehicles-model/:id', new VehicleModelController().show);

vehiclesModelRoutes.get('/vehicles-model', new VehicleModelController().index);

vehiclesModelRoutes.put('/vehicles-model/:id', new VehicleModelController().put);

vehiclesModelRoutes.delete('/vehicles-model/:id', new VehicleModelController().delete);

export { vehiclesModelRoutes };
