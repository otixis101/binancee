/*
  Warnings:

  - The values [TRANSFER] on the enum `TransactionType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[ownerId]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionType_new" AS ENUM ('DEPOSIT', 'WITHDRAWAL', 'INVESTMENT');
ALTER TABLE "Transaction" ALTER COLUMN "type" TYPE "TransactionType_new" USING ("type"::text::"TransactionType_new");
ALTER TYPE "TransactionType" RENAME TO "TransactionType_old";
ALTER TYPE "TransactionType_new" RENAME TO "TransactionType";
DROP TYPE "TransactionType_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "Asset_ownerId_key" ON "Asset"("ownerId");
