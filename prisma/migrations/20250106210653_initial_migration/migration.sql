/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Product` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PackagingType" AS ENUM ('CARDBOARD_BOX', 'CONTAINER', 'PALLET');

-- CreateEnum
CREATE TYPE "CarrierType" AS ENUM ('TRAIN', 'FERRY', 'VAN', 'TRUCK', 'AIRPLANE');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Packaging" (
    "id" SERIAL NOT NULL,
    "type" "PackagingType" NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Packaging_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrier" (
    "id" SERIAL NOT NULL,
    "type" "CarrierType" NOT NULL,
    "licensePlate" VARCHAR(255) NOT NULL,
    "maxPackages" INTEGER NOT NULL,

    CONSTRAINT "Carrier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlannedTransport" (
    "id" SERIAL NOT NULL,
    "carrierId" INTEGER NOT NULL,
    "dates" TIMESTAMP(3)[],

    CONSTRAINT "PlannedTransport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackagedProduct" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "packagingId" INTEGER NOT NULL,

    CONSTRAINT "PackagedProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Packaging_type_key" ON "Packaging"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Carrier_licensePlate_key" ON "Carrier"("licensePlate");

-- AddForeignKey
ALTER TABLE "PlannedTransport" ADD CONSTRAINT "PlannedTransport_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackagedProduct" ADD CONSTRAINT "PackagedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackagedProduct" ADD CONSTRAINT "PackagedProduct_packagingId_fkey" FOREIGN KEY ("packagingId") REFERENCES "Packaging"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
