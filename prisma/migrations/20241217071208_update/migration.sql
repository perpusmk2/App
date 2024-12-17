/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Anggota` will be added. If there are existing duplicate values, this will fail.
  - Made the column `username` on table `Anggota` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Anggota" ALTER COLUMN "username" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Anggota_username_key" ON "Anggota"("username");
