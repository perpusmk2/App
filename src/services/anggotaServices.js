const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllAnggota = async () => {
  const data = await prisma.anggota.findMany({});
  return data;
};

const getAnggotaById = async (params) => {
  const id = params;
  const data = await prisma.anggota.findUnique({
    where: { id },
    include: { siswa: true, guru: true },
  });
  return data;
};

const createAnggota = async (data) => {
  const anggota = await prisma.anggota.create({ data });
  return anggota;
};

const updateAnggota = async (id, data) => {
  const anggota = await prisma.anggota.update({ where: { id }, data });
  return anggota;
};

module.exports = {
  getAllAnggota,
  getAnggotaById,
  createAnggota,
  updateAnggota,
};
