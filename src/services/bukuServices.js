const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require("path");
const fs = require("fs");

const getAllBuku = async () => {
  const data = await prisma.buku.findMany({
    orderBy: { id: "asc" },
    include: {
      bukuTag: {
        include: {
          tag: true,
        },
      },
      penerbit: true,
      sumber_dana: true,
      eksemplar: true,
    },
  });

  if (!data) {
    throw { name: "ErrorNotFound", message: "table is empty" };
  }
  return data;
};

const getBukuById = async (params) => {
  const data = await prisma.buku.findUnique({
    where: { id: +params },
    include: {
      bukuTag: {
        include: {
          tag: true,
        },
      },
      penerbit: true,
      sumber_dana: true,
      eksemplar: true,
    },
  });
  if (!data) {
    throw { name: "ErrorNotFound", message: "Data not found" };
  }
  return data;
};

const createBuku = async (params) => {
  const { eksemplar, tag, ...buku } = params;
  const eksemplarDataArray = [];
  const tagDataArray = [];

  if (buku.isbn) {
    const isbn = await prisma.buku.findUnique({ where: { isbn: buku.isbn } });
    if (isbn) {
      throw {
        name: "DataExist",
        message: "Data already exist, please use another isbn",
      };
    }
  }

  try {
    return await prisma.$transaction(async (tx) => {
      const bukuData = await tx.buku.create({ data: buku });

      if (eksemplar) {
        for (let i = 0; i < eksemplar; i++) {
          eksemplarDataArray.push({ buku_id: bukuData.id });
        }
        await tx.eksemplar.createMany({
          data: eksemplarDataArray,
        });
      }

      if (tag) {
        for (let i = 0; i < tag.length; i++) {
          tagDataArray.push({ buku_id: bukuData.id, tag_id: tag[i] });
        }
        await tx.bukuTag.createMany({
          data: tagDataArray,
        });
      }

      if (bukuData.foto) {
        const fileName = bukuData.foto.replace(
          "http://localhost:3000/api/images/",
          ""
        );

        const oldFilePath = path.join(__dirname, "../../public/tmp", fileName);
        const newFilePath = path.join(
          __dirname,
          "../../public/uploads",
          fileName
        );

        fs.rename(oldFilePath, newFilePath, (err) => {
          if (err) {
            throw { name: "Error", message: "Failed to move file" };
          }
        });
      }
    });
  } catch (error) {
    throw { name: "Error", message: "Failed to create buku" };
  }
};

const updateBuku = async (params) => {
  const oldBuku = await getBukuById(params.id);

  return await prisma.$transaction(async (tx) => {
    if (oldBuku.foto) {
      if (params.body.foto || params.body.foto == "") {
        const url = oldBuku.foto.replace(
          "http://localhost:3000/api/images/",
          ""
        );
        const filePath = path.join(__dirname, "../../public/uploads", url);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    }
    await prisma.buku.update({
      where: { id: +params.id },
      data: params.body,
    });
  });
};

const deleteBuku = async (params) => {
  const buku = await getBukuById(params);

  return await prisma.$transaction(async (tx) => {
    if (buku.foto || buku.foto !== "") {
      const url = buku.foto.replace("http://localhost:3000/api/images/", "");
      const filePath = path.join(__dirname, "../../public/uploads", url);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
    await tx.eksemplar.deleteMany({ where: { buku_id: +params } });
    await tx.bukuTag.deleteMany({ where: { buku_id: +params } });
    await tx.buku.delete({ where: { id: +params } });
  });
};

module.exports = {
  getAllBuku,
  getBukuById,
  createBuku,
  updateBuku,
  deleteBuku,
};
