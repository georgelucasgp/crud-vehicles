import { Router } from "express";
import { DeleteVehicleModelController } from "./../controllers/vehiclesmodel/DeleteVehicleModelController";
import { UpdateVehicleModelController } from "./../controllers/vehiclesmodel/UpdateVehicleModelController";
import { ReadOneVehicleModelController } from "./../controllers/vehiclesmodel/ReadOneVehicleModelController";
import { ReadAllVehicleModelController } from "./../controllers/vehiclesmodel/ReadAllVehicleModelController";
import { CreateVehicleModelController } from "./../controllers/vehiclesmodel/CreateVehicleModelController";


const vehiclesmodelRoutes = Router();

vehiclesmodelRoutes.post("/vehiclesmodel", new CreateVehicleModelController().handle);

vehiclesmodelRoutes.get("/vehiclesmodel/:id", new ReadOneVehicleModelController().handle);

vehiclesmodelRoutes.get("/vehiclesmodel", new ReadAllVehicleModelController().handle);

vehiclesmodelRoutes.put("/vehiclesmodel/:id", new UpdateVehicleModelController().handle);

vehiclesmodelRoutes.delete("/vehiclesmodel/:id", new DeleteVehicleModelController().handle);

export { vehiclesmodelRoutes };
