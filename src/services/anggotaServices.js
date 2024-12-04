const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllAnggota = async () => {
  const data = await prisma.anggota.findMany({});
  return data;
};

module.exports = { getAllAnggota };
