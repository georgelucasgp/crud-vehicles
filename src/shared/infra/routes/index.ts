import { vehicleModelsRoutes } from '@modules/vehicleModel/infra/http/routes/vehicleModelsRoutes';
import { vehiclesRoutes } from '@modules/vehicles/infra/http/routes/vehicles.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/', vehicleModelsRoutes);
routes.use('/', vehiclesRoutes);

export { routes };
