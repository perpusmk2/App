const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllDetail = async () => {
  const data = await prisma.detailTransaksi.findMany({});
  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const getDetailById = async (params) => {
  const data = await prisma.detailTransaksi.findUnique({
    where: { id: +params },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }
  return data;
};

const createDetail = async (params) => {
  const data = await prisma.detailTransaksi.create({ data: params });
  return data;
};

const updateDetail = async (params) => {
  const { id, body } = params;

  await getDetailById(params.id);

  const data = await prisma.detailTransaksi.update({
    where: { id: +id },
    data: body,
  });
  return data;
};

const deleteDetail = async (params) => {
  await getDetailById(params);
  const data = await prisma.detailTransaksi.delete({ where: { id: +params } });
  return data;
};

module.exports = {
  getAllDetail,
  getDetailById,
  createDetail,
  updateDetail,
  deleteDetail,
};
