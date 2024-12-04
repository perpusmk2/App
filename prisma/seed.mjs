import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const user = [
    {
      name: "John Doe",
      nipd: "12345",
      nisn: "2345678900",
      jurusan: "APHP",
    },
    {
      name: "Ikram Syawal Alitu",
      nipd: "12346",
      nisn: "2345678901",
      jurusan: "Busana",
    },
  ];
  await prisma.anggota.createMany({ data: user });

  const buku = [
    {
      judul: "Buku 1",
      pengarang: "Pengarang 1",
      penerbit: "Penerbit 1",
      isbn: "1234567890",
      deskripsi_fisik: "Deskripsi Fisik 1",
      subjek: "Subjek 1",
      sumber_dana: "Sumber Dana 1",
      harga: 100.0,
      letak_buku: "Letak Buku 1",
    },
    {
      judul: "Buku 2",
      pengarang: "Pengarang 2",
      penerbit: "Penerbit 2",
      isbn: "1234567891",
      deskripsi_fisik: "Deskripsi Fisik 2",
      subjek: "Subjek 2",
      sumber_dana: "Sumber Dana 2",
      harga: 200.0,
      letak_buku: "Letak Buku 2",
    },
  ];

  await prisma.buku.createMany({ data: buku });

  const eksemplar = [
    {
      buku_id: 1,
      keterangan: "Keterangan 1",
      foto_bukti: "Foto Bukti 1",
    },
    {
      buku_id: 2,
      keterangan: "Keterangan 2",
      foto_bukti: "Foto Bukti 2",
    },
    {
      buku_id: 1,
      keterangan: "Keterangan 3",
      foto_bukti: "Foto Bukti 3",
    },
    {
      buku_id: 2,
      keterangan: "Keterangan 4",
      foto_bukti: "Foto Bukti 4",
    },
  ];

  await prisma.eksemplar.createMany({ data: eksemplar });
};

main();
