/*
  Warnings:

  - Added the required column `faviconUrl` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookmark` ADD COLUMN `faviconUrl` VARCHAR(191) NOT NULL,
    MODIFY `imageUrl` VARCHAR(191) NULL;
