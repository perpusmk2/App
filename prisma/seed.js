const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const anggota = [
    {
      nama: "Ikram Syawal Alitu",
      username: "superadmin",
      password: "$2a$10$o.ixEX1FcyiNeRCjHbsME.Qx8yE9PMjRrJs/Bvwu18RL/BM6ROQzG",
      kategori: "ADMIN",
    },
    {
      nama: "Anggota 1",
      username: "anggota1",
      password: "$2a$10$FlocnMGFAEPaJIw93pazneuy7ZpmdyEwuH1tm/kG74jHOVxiFotGy",
      telepon: "08123456789",
      foto: "siswa.png",
    },
    {
      nama: "Anggota 2",
      kategori: "GURU",
      username: "anggota2",
      password: "$2a$10$FlocnMGFAEPaJIw93pazneuy7ZpmdyEwuH1tm/kG74jHOVxiFotGy",
      telepon: "082123456789",
      foto: "guru.png",
    },
  ];

  await prisma.anggota.createMany({ data: anggota });

  const siswa = [
    {
      anggota_id: 2,
      nisn: "1234567890",
      nipd: "1234567890",
      jurusan: "DKV",
    },
  ];

  await prisma.siswa.createMany({ data: siswa });

  const guru = [
    {
      anggota_id: 3,
      nip: "1234567890",
    },
  ];

  await prisma.guru.createMany({ data: guru });

  await prisma.buku.create({
    data: {
      judul: "Buku 1",
      pengarang: "Pengarang 1",
      penerbit: "Penerbit 1",
      isbn: "1234567890",
      deskripsi_fisik: "Deskripsi fisik buku 1",
      eksemplar: {
        createMany: {
          data: [{}, {}, {}],
        },
      },
    },
  });
}

main();