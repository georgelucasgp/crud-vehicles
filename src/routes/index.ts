import { Router } from 'express';

import { vehiclesModelRoutes } from './vehicles_model.routes';
import { vehiclesRoutes } from './vehicles.routes';

const routes = Router();

routes.use('/', vehiclesModelRoutes);
routes.use('/', vehiclesRoutes);

export { routes };
