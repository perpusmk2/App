const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllAnggota = async () => {
  const data = await prisma.anggota.findMany({});
  return data;
};

const getAnggotaById = async (id) => {
  const data = await prisma.anggota.findUnique({ where: { id } });
  return data;
};
``;
const createAnggota = async (data) => {
  const anggota = await prisma.anggota.create({ data });
  return anggota;
};

module.exports = { getAllAnggota, getAnggotaById, createAnggota };
