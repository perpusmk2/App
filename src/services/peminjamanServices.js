const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllPeminjaman = async () => {
  const data = await prisma.peminjaman.findMany({
    orderBy: { dibuat: "desc" },
    include: {
      anggota: true,
    },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const getPeminjamanById = async (params) => {
  const data = await prisma.peminjaman.findUnique({
    where: { id: +params },
    include: {
      anggota: true,
      detailPinjam: {
        include: {
          eksemplar: {
            include: {
              buku: true,
            },
          },
        },
      },
    },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }

  const { anggota, detailPinjam, ...rest } = data;
  const results = {
    id: data.id,
    nama: anggota.nama,
    status: data.status_pinjam,
    dibuat: data.dibuat,
    diperbarui: data.diperbarui,
    detailPinjam,
  };

  return results;
};

const createPeminjaman = async (params) => {
  const { anggota_id, eksemplar_id } = params;

  const createPeminjaman = await prisma.$transaction(async (tx) => {
    const data = await prisma.peminjaman.create({
      data: {
        anggota_id,
      },
    });

    await tx.detailTransaksi.createMany({
      data: eksemplar_id.map((id) => ({
        peminjaman_id: data.id,
        eksemplar_id: id,
      })),
    });

    await tx.eksemplar.updateMany({
      where: { id: { in: eksemplar_id } },
      data: { status_buku: "DIPINJAM" },
    });

    return data;
  });

  return createPeminjaman;
};

const updatePeminjaman = async (params) => {
  const { id, body } = params;
  const data = await getPeminjamanById(id);
  const { detailPinjam } = data;

  if (body.status_pinjam == "KEMBALI") {
    return await prisma.$transaction(async (tx) => {
      detailPinjam.forEach(async (id) => {
        await prisma.eksemplar.update({
          where: { id: id.eksemplar_id },
          data: { status_buku: "TERSEDIA" },
        });
      });

      await prisma.peminjaman.update({
        where: { id: data.id },
        data: { status_pinjam: "KEMBALI" },
      });
    });
  } else {
    return await prisma.peminjaman.update({
      where: { id: data.id },
      data: body,
    });
  }
};

const deletePeminjaman = async (params) => {
  const data = await getPeminjamanById(params);

  const { detailPinjam } = data;
  return await prisma.$transaction(async (tx) => {
    detailPinjam.forEach(async (id) => {
      await prisma.eksemplar.update({
        where: { id: id.eksemplar_id },
        data: { status_buku: "TERSEDIA" },
      });
    });

    await prisma.detailTransaksi.deleteMany({
      where: { peminjaman_id: data.id },
    });

    await prisma.peminjaman.delete({
      where: { id: data.id },
    });
  });
};

module.exports = {
  getAllPeminjaman,
  getPeminjamanById,
  createPeminjaman,
  updatePeminjaman,
  deletePeminjaman,
};
