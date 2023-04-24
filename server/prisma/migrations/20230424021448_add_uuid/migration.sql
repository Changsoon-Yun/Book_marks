/*
  Warnings:

  - The required column `orderId` was added to the `Bookmark` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `orderId` was added to the `Folder` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `Bookmark` ADD COLUMN `orderId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Folder` ADD COLUMN `orderId` VARCHAR(191) NOT NULL;
