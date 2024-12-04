const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = require("./src/routes");
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from index!");
});
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});

async function main() {}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
