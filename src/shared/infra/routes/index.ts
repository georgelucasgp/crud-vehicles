import { Router } from 'express';

import { vehiclesRoutes } from '../../../modules/vehicles/infra/http/routes/vehicles.routes';

const routes = Router();

routes.use('/', vehiclesModelRoutes);
routes.use('/', vehiclesRoutes);

export { routes };
