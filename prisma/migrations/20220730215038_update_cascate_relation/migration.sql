-- DropForeignKey
ALTER TABLE "vehicles_information" DROP CONSTRAINT "vehicles_information_vehiclesModelId_fkey";

-- AlterTable
ALTER TABLE "vehicles_information" ALTER COLUMN "vehiclesModelId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "vehicles_information" ADD CONSTRAINT "vehicles_information_vehiclesModelId_fkey" FOREIGN KEY ("vehiclesModelId") REFERENCES "vehicles_model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
