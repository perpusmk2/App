const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllSumber = async () => {
  const data = await prisma.sumberDana.findMany({});
  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const getSumberById = async (params) => {
  const data = await prisma.sumberDana.findUnique({ where: { id: +params } });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }
  return data;
};

const createSumber = async (params) => {
  const sumberData = await getAllSumber();
  for (let d of sumberData) {
    if (d.nama.toLocaleLowerCase() === params.nama.toLocaleLowerCase()) {
      throw {
        name: "DataExist",
        message: "Data already exist, please use another name",
      };
    }
  }
  const data = await prisma.sumberDana.create({ data: params });
  return data;
};

const updateSumber = async (params) => {
  const { id, body } = params;
  await getSumberById(id);
  const sumberData = await getAllSumber();
  for (let d of sumberData) {
    if (d.nama.toLocaleLowerCase() === body.nama.toLocaleLowerCase()) {
      throw {
        name: "DataExist",
        message: "Data already exist, please use another name",
      };
    }
  }
  const data = await prisma.sumberDana.update({
    where: { id: +id },
    data: body,
  });
  return data;
};

const deleteSumber = async (params) => {
  await getSumberById(params);
  const data = await prisma.sumberDana.delete({ where: { id: +params } });
  return data;
};
module.exports = {
  getAllSumber,
  getSumberById,
  createSumber,
  updateSumber,
  deleteSumber,
};
