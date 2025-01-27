const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBukuTag = async () => {
  const data = await prisma.bukuTag.findMany({
    orderBy: { id: "asc" },
  });

  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const getBukuTagById = async (params) => {
  const data = await prisma.bukuTag.findUnique({ where: { id: +params } });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }
  return data;
};

const createBukuTag = async (params) => {
  const data = await prisma.bukuTag.create({ data: params });
  return data;
};

const updateBukuTag = async (params) => {
  const { id, body } = params;
  await getBukuTagById(id);
  const data = await prisma.bukuTag.update({
    where: { id: +id },
    data: body,
  });
  return data;
};

const deleteBukuTag = async (params) => {
  await getBukuTagById(params);
  const data = await prisma.bukuTag.delete({ where: { id: +params } });
  return data;
};

module.exports = {
  getAllBukuTag,
  getBukuTagById,
  createBukuTag,
  updateBukuTag,
  deleteBukuTag,
};
