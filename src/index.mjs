import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});

async function main() {
  const eksemplar = await prisma.eksemplar.findMany({
    where: { buku_id: 1 },
  });
  console.log(eksemplar);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
