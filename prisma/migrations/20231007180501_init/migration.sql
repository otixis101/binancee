/*
  Warnings:

  - Added the required column `address` to the `Withdrawals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Withdrawals" ADD COLUMN     "address" TEXT NOT NULL;
