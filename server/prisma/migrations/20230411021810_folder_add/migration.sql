-- DropForeignKey
ALTER TABLE `Bookmark`
    DROP FOREIGN KEY `Bookmark_folderId_fkey`;

-- AlterTable
ALTER TABLE `Bookmark`
    MODIFY `folderId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Bookmark`
    ADD CONSTRAINT `Bookmark_folderId_fkey` FOREIGN KEY (`folderId`) REFERENCES `Folder` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
