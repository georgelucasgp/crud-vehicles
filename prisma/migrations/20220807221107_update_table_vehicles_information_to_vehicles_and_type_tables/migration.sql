/*
  Warnings:

  - You are about to drop the `vehicles_information` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "vehicles_information" DROP CONSTRAINT "vehicles_information_vehiclesModelId_fkey";

-- DropTable
DROP TABLE "vehicles_information";

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "license_plate" TEXT NOT NULL,
    "chassis" TEXT NOT NULL,
    "renavam" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "vehicles_model_id" TEXT NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_license_plate_key" ON "vehicles"("license_plate");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_vehicles_model_id_fkey" FOREIGN KEY ("vehicles_model_id") REFERENCES "vehicles_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
