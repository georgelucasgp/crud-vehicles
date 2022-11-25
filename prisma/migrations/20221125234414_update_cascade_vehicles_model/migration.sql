-- DropForeignKey
ALTER TABLE "vehicle" DROP CONSTRAINT "vehicle_vehicles_model_id_fkey";

-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_vehicles_model_id_fkey" FOREIGN KEY ("vehicles_model_id") REFERENCES "vehicle_model"("id") ON DELETE CASCADE ON UPDATE CASCADE;
