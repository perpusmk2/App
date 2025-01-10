/*
  Warnings:

  - You are about to drop the column `buku_id` on the `BukuSumbangan` table. All the data in the column will be lost.
  - Added the required column `judul` to the `BukuSumbangan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BukuSumbangan" DROP CONSTRAINT "BukuSumbangan_buku_id_fkey";

-- AlterTable
ALTER TABLE "Buku" ALTER COLUMN "nomor_induk" DROP NOT NULL;

-- AlterTable
ALTER TABLE "BukuSumbangan" DROP COLUMN "buku_id",
ADD COLUMN     "judul" TEXT NOT NULL;
