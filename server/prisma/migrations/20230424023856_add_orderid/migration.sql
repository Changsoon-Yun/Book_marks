/*
  Warnings:

  - You are about to alter the column `orderId` on the `Bookmark` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `orderId` on the `Folder` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Bookmark` MODIFY `orderId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Folder` MODIFY `orderId` INTEGER NOT NULL;
