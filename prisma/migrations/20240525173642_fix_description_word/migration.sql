/*
  Warnings:

  - You are about to drop the column `desciption` on the `Issue` table. All the data in the column will be lost.
  - Added the required column `description` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Issue` DROP COLUMN `desciption`,
    ADD COLUMN `description` TEXT NOT NULL;
