const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllAnggota = async () => {
  const data = await prisma.anggota.findMany({
    orderBy: { id: "asc" },
  });
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

const createAnggota = async (params) => {
  const anggota = await prisma.anggota.create({ params });
  return anggota;
};

const updateAnggota = async (params) => {
  const { id, body } = params;
  console.log(body);
  console.log(id);

  const data = await prisma.anggota.update({
    where: { id: +id },
    data: body,
  });
  return data;
};

module.exports = {
  getAllAnggota,
  getAnggotaById,
  createAnggota,
  updateAnggota,
};
