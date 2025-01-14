const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllSumbangan = async () => {
  const data = await prisma.bukuSumbangan.findMany({
    orderBy: { id: "asc" },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const getSumbanganById = async (params) => {
  const data = await prisma.bukuSumbangan.findUnique({
    where: { id: +params },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }
  return data;
};

const createSumbangan = async (params) => {
  const data = await prisma.bukuSumbangan.create({ data: params });
  return data;
};

const updateSumbangan = async (params) => {
  const { id, body } = params;
  await getSumbanganById(id);
  const anggotaId = await prisma.anggota.findUnique({
    where: { id: body.anggota_id },
  });
  if (!anggotaId) {
    throw { name: "ErrorNotFound", message: "Anggota not found" };
  }
  const data = await prisma.bukuSumbangan.update({
    where: { id: +id },
    data: body,
  });
  return data;
};

const deleteSumbangan = async (params) => {
  await getSumbanganById(params);
  const data = await prisma.bukuSumbangan.delete({ where: { id: +params } });
  return data;
};

module.exports = {
  getAllSumbangan,
  getSumbanganById,
  createSumbangan,
  updateSumbangan,
  deleteSumbangan,
};
