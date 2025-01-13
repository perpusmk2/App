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
      nomor_induk: "1234567890",
    },
    {
      nama: "Anggota 2",
      kategori: "GURU",
      username: "anggota2",
      password: "$2a$10$FlocnMGFAEPaJIw93pazneuy7ZpmdyEwuH1tm/kG74jHOVxiFotGy",
      telepon: "082123456789",
      foto: "guru.png",
      nomor_induk: "1234567891",
    },
    {
      nama: "Anggota 3",
      telepon: "083123456789",
      foto: "siswa2.png",
      nomor_induk: "1234567892",
    },
  ];

  await prisma.anggota.createMany({ data: anggota });

  const tag = [
    {
      nama: "Tag 1",
    },
    {
      nama: "Tag 2",
    },
    {
      nama: "Tag 3",
    },
  ];

  await prisma.tag.createMany({ data: tag });

  const Penerbit = [
    {
      nama: "Penerbit 1",
    },
    {
      nama: "Penerbit 2",
    },
    {
      nama: "Penerbit 3",
    },
  ];

  await prisma.penerbit.createMany({ data: Penerbit });

  const sumberDana = [
    {
      nama: "Sumber Dana 1",
    },
    {
      nama: "Sumber Dana 2",
    },
    {
      nama: "Sumber Dana 3",
    },
  ];

  await prisma.sumberDana.createMany({ data: sumberDana });

  const buku = [
    {
      judul: "Buku 1",
      pengarang: "Pengarang 1",
      penerbit_id: 1,
      isbn: "1234567890",
      tahun_terbit: "2020",
      harga: 10000,
      sumber_dana_id: 1,
      deskripsi_fisik: "Deskripsi fisik buku 1",
      eksemplar: {
        createMany: {
          data: [{}],
        },
      },
      bukuTag: {
        createMany: {
          data: [
            {
              tag_id: 1,
            },
            {
              tag_id: 2,
            },
          ],
        },
      },
      fotoBuku: {
        createMany: {
          data: [
            {
              foto: "buku1.jpg",
            },
            {
              foto: "buku2.jpg",
              tipe: "DAFTAR_ISI",
            },
            {
              foto: "buku3.jpg",
              tipe: "SAMPUL_BELAKANG",
            },
          ],
        },
      },
    },
    {
      judul: "Buku 2",
      pengarang: "Pengarang 2",
      penerbit_id: 2,
      isbn: "1234567891",
      tahun_terbit: "2021",
      harga: 20000,
      sumber_dana_id: 2,
      deskripsi_fisik: "Deskripsi fisik buku 2",
      eksemplar: {
        createMany: {
          data: [{}, {}],
        },
      },
      bukuTag: {
        createMany: {
          data: [
            {
              tag_id: 2,
            },
            {
              tag_id: 3,
            },
          ],
        },
      },
      fotoBuku: {
        createMany: {
          data: [
            {
              foto: "buku4.jpg",
            },
            {
              foto: "buku5.jpg",
              tipe: "DAFTAR_ISI",
            },
            {
              foto: "buku5.jpg",
              tipe: "DAFTAR_ISI",
            },
            {
              foto: "buku6.jpg",
              tipe: "SAMPUL_BELAKANG",
            },
          ],
        },
      },
    },
    {
      judul: "Buku 3",
      pengarang: "Pengarang 3",
      isbn: "1234567892",
      tahun_terbit: "2022",
      harga: 30000,
      sumber_dana_id: 3,
      deskripsi_fisik: "Deskripsi fisik buku 3",
      eksemplar: {
        createMany: {
          data: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
      },
      bukuTag: {
        createMany: {
          data: [
            {
              tag_id: 3,
            },
          ],
        },
      },
      fotoBuku: {
        createMany: {
          data: [
            {
              foto: "buku7.jpg",
            },
            {
              foto: "buku8.jpg",
              tipe: "DAFTAR_ISI",
            },
            {
              foto: "buku9.jpg",
              tipe: "DAFTAR_ISI",
            },
            {
              foto: "buku10.jpg",
              tipe: "SAMPUL_BELAKANG",
            },
          ],
        },
      },
    },
  ];

  for (const b of buku) {
    await prisma.buku.create({ data: b });
  }

  const sumbangan = [
    {
      anggota_id: 2,
      judul: "Buku 2002",
    },
    {
      anggota_id: 4,
      judul: "Buku 2004",
    },
  ];

  await prisma.bukuSumbangan.createMany({ data: sumbangan });
}

main();
