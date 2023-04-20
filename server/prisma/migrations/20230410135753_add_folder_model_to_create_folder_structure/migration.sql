/*
  Warnings:

  - You are about to drop the column `content` on the `Bookmark` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Bookmark` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - Added the required column `folderId` to the `Bookmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Bookmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookmark`
    DROP COLUMN `content`,
    DROP COLUMN `created_at`,
    ADD COLUMN `createdAt`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `folderId`    INTEGER      NOT NULL,
    ADD COLUMN `parentId`    INTEGER      NULL,
    ADD COLUMN `updatedAt`   DATETIME(3)  NOT NULL,
    ADD COLUMN `url`         VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User`
    DROP COLUMN `created_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Folder`
(
    `id`        INTEGER      NOT NULL AUTO_INCREMENT,
    `name`      VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3)  NOT NULL,
    `parentId`  INTEGER      NULL,
    `userId`    INTEGER      NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bookmark`
    ADD CONSTRAINT `Bookmark_folderId_fkey` FOREIGN KEY (`folderId`) REFERENCES `Folder` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Folder`
    ADD CONSTRAINT `Folder_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Folder` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Folder`
    ADD CONSTRAINT `Folder_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
