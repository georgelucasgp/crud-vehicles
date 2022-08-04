/*
  Warnings:

  - Added the required column `vehiclesModelId` to the `vehicles_information` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vehicles_information" ADD COLUMN     "vehiclesModelId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "vehicles_information" ADD CONSTRAINT "vehicles_information_vehiclesModelId_fkey" FOREIGN KEY ("vehiclesModelId") REFERENCES "vehicles_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
