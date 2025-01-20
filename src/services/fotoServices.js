const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config();
const path = require("path");
const fs = require("fs");

const findAllFoto = async () => {
  const data = await prisma.fotoBuku.findMany({
    orderBy: { id: "asc" },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const findFotoById = async (params) => {
  const data = await prisma.fotoBuku.findUnique({ where: { id: +params } });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }
  return data;
};

const createFoto = async (params) => {
  const data = await prisma.fotoBuku.create({ data: params });
  return data;
};

const uploadFoto = async (params) => {
  if (!params) {
    throw { name: "MissingFile", message: "please upload image" };
  } else {
    const url = `${process.env.SERVER_URL}/api/images/${params.filename}`;
    return url;
  }
};

const updateFoto = async (params) => {
  const data = await prisma.fotoBuku.update({
    where: { id: +params.id },
    data: params,
  });
  return data;
};

const deleteFoto = async (params) => {
  const data = await findFotoById(params);
  const foto = data.foto;
  const url = foto.replace("http://localhost:3000/api/images/", "");
  const filePath = path.join(__dirname, "../../public/uploads", url);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
    }
  });
  await prisma.fotoBuku.delete({ where: { id: +params } });
  return data;
};

module.exports = {
  findAllFoto,
  findFotoById,
  createFoto,
  uploadFoto,
  updateFoto,
  deleteFoto,
};
