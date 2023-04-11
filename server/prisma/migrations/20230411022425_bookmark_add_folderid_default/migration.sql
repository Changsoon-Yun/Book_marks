/*
  Warnings:

  - Made the column `folderId` on table `Bookmark` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Bookmark` DROP FOREIGN KEY `Bookmark_folderId_fkey`;

-- AlterTable
ALTER TABLE `Bookmark` MODIFY `folderId` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Bookmark` ADD CONSTRAINT `Bookmark_folderId_fkey` FOREIGN KEY (`folderId`) REFERENCES `Folder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
