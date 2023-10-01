-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "InvestmentStatus" AS ENUM ('STARTED', 'CANCELLED', 'COMPLETED');

-- AlterTable
ALTER TABLE "Investments" ADD COLUMN     "status" "InvestmentStatus" NOT NULL DEFAULT 'STARTED';

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING';
