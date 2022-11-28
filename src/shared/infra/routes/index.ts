import { Router } from 'express';

import { vehicleModelsRoutes } from '../../../modules/vehicleModel/infra/http/routes/vehicleModelsRoutes';
import { vehiclesRoutes } from '../../../modules/vehicles/infra/http/routes/vehicles.routes';

const routes = Router();

routes.use('/', vehicleModelsRoutes);
routes.use('/', vehiclesRoutes);

export { routes };
