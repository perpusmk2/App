-- CreateEnum
CREATE TYPE "Kelas" AS ENUM ('X', 'XI', 'XII', 'LULUS');

-- CreateEnum
CREATE TYPE "Kategori" AS ENUM ('SISWA', 'GURU');

-- CreateEnum
CREATE TYPE "StatusAnggota" AS ENUM ('AKTIF', 'TIDAK_AKTIF');

-- CreateEnum
CREATE TYPE "StatusSumbangan" AS ENUM ('BELUM', 'SUDAH', 'BUKAN_PENYUMBANG');

-- CreateEnum
CREATE TYPE "StatusBuku" AS ENUM ('TERSEDIA', 'DIPINJAM', 'RUSAK', 'HILANG');

-- CreateEnum
CREATE TYPE "StatusPinjam" AS ENUM ('PINJAM', 'KEMBALI', 'BATAL');

-- CreateTable
CREATE TABLE "Anggota" (
    "id" SERIAL NOT NULL,
    "kategori" "Kategori" NOT NULL DEFAULT 'SISWA',
    "name" TEXT NOT NULL,
    "nip" TEXT,
    "nipd" TEXT,
    "nisn" TEXT,
    "foto" TEXT,
    "kelas" "Kelas" NOT NULL DEFAULT 'X',
    "jurusan" TEXT,
    "status_anggota" "StatusAnggota" NOT NULL DEFAULT 'AKTIF',
    "status_sumbangan" "StatusSumbangan" NOT NULL DEFAULT 'BELUM',

    CONSTRAINT "Anggota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buku" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "pengarang" TEXT,
    "penerbit" TEXT,
    "isbn" TEXT,
    "deskripsi_fisik" TEXT,
    "subjek" TEXT,
    "foto" TEXT,
    "tahun_masuk" TIMESTAMP(3),
    "sumber_dana" TEXT,
    "harga" DOUBLE PRECISION,
    "letak_buku" TEXT,
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eksemplar" (
    "id" SERIAL NOT NULL,
    "buku_id" INTEGER NOT NULL,
    "status_buku" "StatusBuku" NOT NULL DEFAULT 'TERSEDIA',
    "keterangan" TEXT,
    "foto_bukti" TEXT,
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Eksemplar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peminjaman" (
    "id" SERIAL NOT NULL,
    "anggota_id" INTEGER NOT NULL,
    "buku_id" INTEGER NOT NULL,
    "status_pinjam" "StatusPinjam" NOT NULL DEFAULT 'PINJAM',
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Peminjaman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailPeminjaman" (
    "id" SERIAL NOT NULL,
    "peminjaman_id" INTEGER NOT NULL,
    "eksemplar_id" INTEGER NOT NULL,
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetailPeminjaman_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Eksemplar" ADD CONSTRAINT "Eksemplar_buku_id_fkey" FOREIGN KEY ("buku_id") REFERENCES "Buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_anggota_id_fkey" FOREIGN KEY ("anggota_id") REFERENCES "Anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_buku_id_fkey" FOREIGN KEY ("buku_id") REFERENCES "Buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPeminjaman" ADD CONSTRAINT "DetailPeminjaman_peminjaman_id_fkey" FOREIGN KEY ("peminjaman_id") REFERENCES "Peminjaman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPeminjaman" ADD CONSTRAINT "DetailPeminjaman_eksemplar_id_fkey" FOREIGN KEY ("eksemplar_id") REFERENCES "Eksemplar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
