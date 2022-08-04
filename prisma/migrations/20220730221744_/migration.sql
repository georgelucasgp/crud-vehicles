/*
  Warnings:

  - A unique constraint covering the columns `[model]` on the table `vehicles_model` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "vehicles_model_model_key" ON "vehicles_model"("model");
