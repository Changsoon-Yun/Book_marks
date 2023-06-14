/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Bookmark_orderId_key` ON `Bookmark`(`orderId`);

-- CreateIndex
CREATE UNIQUE INDEX `Folder_orderId_key` ON `Folder`(`orderId`);
