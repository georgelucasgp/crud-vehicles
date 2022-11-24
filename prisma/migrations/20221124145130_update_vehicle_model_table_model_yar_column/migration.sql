/*
  Warnings:

  - You are about to alter the column `model_year` on the `vehicle_model` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "vehicle_model" ALTER COLUMN "model_year" SET DATA TYPE INTEGER;
