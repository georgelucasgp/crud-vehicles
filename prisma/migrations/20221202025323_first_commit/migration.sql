-- CreateTable
CREATE TABLE "vehicle" (
    "id" TEXT NOT NULL,
    "license_plate" TEXT NOT NULL,
    "chassis" TEXT NOT NULL,
    "renavam" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "vehicles_model_id" TEXT NOT NULL,

    CONSTRAINT "vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_model" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model_year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicle_model_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_license_plate_key" ON "vehicle"("license_plate");

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_model_model_key" ON "vehicle_model"("model");

-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_vehicles_model_id_fkey" FOREIGN KEY ("vehicles_model_id") REFERENCES "vehicle_model"("id") ON DELETE CASCADE ON UPDATE CASCADE;
