import { Router } from "express";
import { DeleteVehicleInformationController } from './../controllers/vehiclesinformation/DeleteVehicleInformationController';
import { UpdateVehicleInformationController } from './../controllers/vehiclesinformation/UpdateVehicleInformationController';
import { ReadAllVehicleInformationController } from './../controllers/vehiclesinformation/ReadAllVehicleInformationController';
import { ReadOneVehicleInformationController } from './../controllers/vehiclesinformation/ReadOneVehicleInformationController';
import { CreateVehicleInformationController } from './../controllers/vehiclesinformation/CreateVehicleInformationController';




const vehiclesinformationRoutes = Router();

vehiclesinformationRoutes.post("/vehiclesinformation", new CreateVehicleInformationController().handle);

vehiclesinformationRoutes.get("/vehiclesinformation/:id", new ReadOneVehicleInformationController().handle);

vehiclesinformationRoutes.get("/vehiclesinformation", new ReadAllVehicleInformationController().handle);

vehiclesinformationRoutes.put("/vehiclesinformation/:id", new UpdateVehicleInformationController().handle);

vehiclesinformationRoutes.delete("/vehiclesinformation/:id", new DeleteVehicleInformationController().handle);

export { vehiclesinformationRoutes };
