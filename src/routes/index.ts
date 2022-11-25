import { Router } from 'express';

import { vehiclesRoutes } from './vehicles.routes';
import { vehiclesModelRoutes } from './vehiclesModel.routes';

const routes = Router();

routes.use('/', vehiclesModelRoutes);
routes.use('/', vehiclesRoutes);

export { routes };
