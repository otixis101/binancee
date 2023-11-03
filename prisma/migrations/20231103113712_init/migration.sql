-- CreateEnum
CREATE TYPE "KycStatus" AS ENUM ('SUCCESS', 'PENDING', 'FAILED');

-- AlterTable
ALTER TABLE "Kyc" ADD COLUMN     "status" "KycStatus" NOT NULL DEFAULT 'SUCCESS';
