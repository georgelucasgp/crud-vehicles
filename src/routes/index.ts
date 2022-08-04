import { Router } from "express";

import { vehiclesmodelRoutes } from "./vehiclesmodel.routes";
import { vehiclesinformationRoutes } from "./vehiclesinformation.routes";

const routes = Router();

routes.use("/", vehiclesmodelRoutes);
routes.use("/", vehiclesinformationRoutes);

export { routes };
