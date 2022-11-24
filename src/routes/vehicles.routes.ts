import { Router } from 'express';

import { createVehicleFactory } from '../modules/vehicle/createVehicle/createVehicleFactory';
import { deleteVehicleFactory } from '../modules/vehicle/deleteVehicle/deleteVehicleFactory';
import { updateVehicleFactory } from '../modules/vehicle/updateVehicle/updateVehicleFactory';

const vehiclesRoutes = Router();

vehiclesRoutes.post('/vehicles', createVehicleFactory().store);

// vehiclesRoutes.get('/vehicles/:id', new VehicleController().show);

// vehiclesRoutes.get('/vehicles', new VehicleController().index);

vehiclesRoutes.put('/vehicles/:id', updateVehicleFactory().put);

vehiclesRoutes.delete('/vehicles/:id', deleteVehicleFactory().delete);

export { vehiclesRoutes };
