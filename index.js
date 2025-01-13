const express = require("express");
const router = require("./src/routes");
const app = express();
const PORT = process.env.PORT || 3000;
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello from index!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
