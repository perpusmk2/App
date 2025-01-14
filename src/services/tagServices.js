const { PrismaClient } = require("@prisma/client");
const { get } = require("../routes/tagRoutes");
const prisma = new PrismaClient();

const getAllTag = async () => {
  const data = await prisma.tag.findMany({
    orderBy: { id: "asc" },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const getTagById = async (params) => {
  const data = await prisma.tag.findUnique({ where: { id: +params } });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }
  return data;
};

const createTag = async (params) => {
  const data = await getAllTag();
  for (let d of data) {
    if (d.nama.toLocaleLowerCase() === params.nama.toLocaleLowerCase()) {
      throw {
        name: "DataExist",
        message: "Data already exist, please use another name",
      };
    }
  }
  const tag = await prisma.tag.create({ data: params });
  return tag;
};

const updateTag = async (params) => {
  const { id, body } = params;
  await getTagById(id);
  const data = await getAllTag();
  for (let d of data) {
    if (d.nama.toLocaleLowerCase() === body.nama.toLocaleLowerCase()) {
      throw {
        name: "DataExist",
        message: "Data already exist, please use another name",
      };
    }
  }
  const tag = await prisma.tag.update({
    where: { id: +id },
    data: body,
  });
  return tag;
};

const deleteTag = async (params) => {
  await getTagById(params);
  const data = await prisma.tag.delete({ where: { id: +params } });
  return data;
};

module.exports = { getAllTag, getTagById, createTag, updateTag, deleteTag };
