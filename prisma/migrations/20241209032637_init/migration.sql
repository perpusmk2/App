-- CreateEnum
CREATE TYPE "Kelas" AS ENUM ('X', 'XI', 'XII', 'LULUS', 'BUKAN_SISWA');

-- CreateEnum
CREATE TYPE "Kategori" AS ENUM ('SISWA', 'GURU', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusAnggota" AS ENUM ('AKTIF', 'TIDAK_AKTIF');

-- CreateEnum
CREATE TYPE "StatusSumbangan" AS ENUM ('BELUM', 'SUDAH', 'BUKAN_PENYUMBANG');

-- CreateEnum
CREATE TYPE "TipeFoto" AS ENUM ('SAMPUL', 'DAFTAR_ISI', 'SAMPUL_BELAKANG');

-- CreateEnum
CREATE TYPE "StatusBuku" AS ENUM ('TERSEDIA', 'DIPINJAM', 'RUSAK', 'HILANG');

-- CreateEnum
CREATE TYPE "Status_pinjam" AS ENUM ('PINJAM', 'KEMBALI', 'BATAL');

-- CreateTable
CREATE TABLE "Anggota" (
    "id" SERIAL NOT NULL,
    "kategori" "Kategori" NOT NULL DEFAULT 'SISWA',
    "nama" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "foto" TEXT,
    "status_anggota" "StatusAnggota" NOT NULL DEFAULT 'AKTIF',
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anggota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guru" (
    "id" SERIAL NOT NULL,
    "anggota_id" INTEGER NOT NULL,
    "nip" TEXT,
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guru_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Siswa" (
    "id" SERIAL NOT NULL,
    "anggota_id" INTEGER NOT NULL,
    "nisn" TEXT,
    "nipd" TEXT,
    "kelas" "Kelas" NOT NULL DEFAULT 'X',
    "jurusan" TEXT,
    "status_sumbangan" "StatusSumbangan" NOT NULL DEFAULT 'BELUM',
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Siswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buku" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "pengarang" TEXT,
    "penerbit" TEXT,
    "isbn" TEXT,
    "deskripsi_fisik" TEXT,
    "tahun_masuk" TIMESTAMP(3),
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FotoBuku" (
    "id" SERIAL NOT NULL,
    "buku_id" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,
    "tipe" "TipeFoto" NOT NULL DEFAULT 'SAMPUL',

    CONSTRAINT "FotoBuku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BukuTag" (
    "id" SERIAL NOT NULL,
    "buku_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "BukuTag_pkey" PRIMARY KEY ("id")
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
    "status_pinjam" "Status_pinjam" NOT NULL DEFAULT 'PINJAM',
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Peminjaman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailTransaksi" (
    "id" SERIAL NOT NULL,
    "peminjaman_id" INTEGER NOT NULL,
    "eksemplar_id" INTEGER NOT NULL,
    "dibuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetailTransaksi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guru_anggota_id_key" ON "Guru"("anggota_id");

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_anggota_id_key" ON "Siswa"("anggota_id");

-- CreateIndex
CREATE UNIQUE INDEX "DetailTransaksi_eksemplar_id_key" ON "DetailTransaksi"("eksemplar_id");

-- AddForeignKey
ALTER TABLE "Guru" ADD CONSTRAINT "Guru_anggota_id_fkey" FOREIGN KEY ("anggota_id") REFERENCES "Anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Siswa" ADD CONSTRAINT "Siswa_anggota_id_fkey" FOREIGN KEY ("anggota_id") REFERENCES "Anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FotoBuku" ADD CONSTRAINT "FotoBuku_buku_id_fkey" FOREIGN KEY ("buku_id") REFERENCES "Buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BukuTag" ADD CONSTRAINT "BukuTag_buku_id_fkey" FOREIGN KEY ("buku_id") REFERENCES "Buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BukuTag" ADD CONSTRAINT "BukuTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eksemplar" ADD CONSTRAINT "Eksemplar_buku_id_fkey" FOREIGN KEY ("buku_id") REFERENCES "Buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_anggota_id_fkey" FOREIGN KEY ("anggota_id") REFERENCES "Anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailTransaksi" ADD CONSTRAINT "DetailTransaksi_peminjaman_id_fkey" FOREIGN KEY ("peminjaman_id") REFERENCES "Peminjaman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailTransaksi" ADD CONSTRAINT "DetailTransaksi_eksemplar_id_fkey" FOREIGN KEY ("eksemplar_id") REFERENCES "Eksemplar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
