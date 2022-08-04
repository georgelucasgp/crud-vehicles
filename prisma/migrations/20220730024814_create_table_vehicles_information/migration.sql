-- CreateTable
CREATE TABLE "vehicles_information" (
    "id" TEXT NOT NULL,
    "license_plate" TEXT NOT NULL,
    "chassis" TEXT NOT NULL,
    "renavam" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicles_information_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_information_license_plate_key" ON "vehicles_information"("license_plate");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_information_chassis_key" ON "vehicles_information"("chassis");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_information_renavam_key" ON "vehicles_information"("renavam");
