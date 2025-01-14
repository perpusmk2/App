const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllPenerbit = async () => {
  const data = await prisma.penerbit.findMany({
    orderBy: { id: "asc" },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const getPenerbitById = async (params) => {
  const data = await prisma.penerbit.findUnique({ where: { id: +params } });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }
  return data;
};

const createPenerbit = async (params) => {
  const data = await getAllPenerbit();
  for (let d of data) {
    if (d.nama.toLocaleLowerCase() === params.nama.toLocaleLowerCase()) {
      throw {
        name: "DataExist",
        message: "Data already exist, please use another name",
      };
    }
  }
  const penerbit = await prisma.penerbit.create({ data: params });
  return penerbit;
};

const updatePenerbit = async (params) => {
  const { id, body } = params;
  await getPenerbitById(id);
  const data = await getAllPenerbit();
  for (let d of data) {
    if (d.nama.toLocaleLowerCase() === body.nama.toLocaleLowerCase()) {
      throw {
        name: "DataExist",
        message: "Data already exist, please use another name",
      };
    }
  }
  const penerbit = await prisma.penerbit.update({
    where: { id: +id },
    data: body,
  });
  return penerbit;
};

const deletePenerbit = async (params) => {
  await getPenerbitById(params);
  const data = await prisma.penerbit.delete({ where: { id: +params } });
  return data;
};

module.exports = {
  getAllPenerbit,
  getPenerbitById,
  createPenerbit,
  updatePenerbit,
  deletePenerbit,
};
