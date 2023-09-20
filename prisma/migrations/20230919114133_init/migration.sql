/*
  Warnings:

  - You are about to drop the `_AssetToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AssetToUser" DROP CONSTRAINT "_AssetToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AssetToUser" DROP CONSTRAINT "_AssetToUser_B_fkey";

-- AlterTable
ALTER TABLE "Asset" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_AssetToUser";

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
