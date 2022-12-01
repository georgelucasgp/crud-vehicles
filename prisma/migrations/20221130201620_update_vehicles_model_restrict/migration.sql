/*
  Warnings:

  - Made the column `vehicles_model_id` on table `vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "vehicle" ALTER COLUMN "vehicles_model_id" SET NOT NULL;
