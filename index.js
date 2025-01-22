const express = require("express");
const router = require("./src/routes");
const app = express();
const PORT = process.env.PORT || 3000;
const errorHandler = require("./middlewares/errorHandler");
const cron = require("node-cron");
const clearFolder = require("./lib/clearFolder");
const path = require("path");

const folderPath = path.join(__dirname, "./public/tmp");

cron.schedule("*/1 * * * *", () => {
  console.log("running a task every 2 minutes");
  clearFolder(folderPath);
});

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello from index!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
