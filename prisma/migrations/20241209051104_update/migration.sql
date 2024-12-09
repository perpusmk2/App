-- AlterTable
ALTER TABLE "Anggota" ADD COLUMN     "telepon" TEXT,
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
