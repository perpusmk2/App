const express = require("express");
const router = express.Router();
const path = require("path");

const anggotaRoute = require("./anggotaRoutes");
router.use("/api/anggota", anggotaRoute);

const tagRoute = require("./tagRoutes");
router.use("/api/tag", tagRoute);

const sumberRoute = require("./sumberRoutes");
router.use("/api/sumber", sumberRoute);

const penerbitRoute = require("./penerbitRoutes");
router.use("/api/penerbit", penerbitRoute);

const sumbanganRoute = require("./sumbanganRoutes");
router.use("/api/sumbangan", sumbanganRoute);

const fotoRoute = require("./fotoRoutes");
router.use("/api/foto", fotoRoute);

router.use(
  "/api/images",
  express.static(path.join(__dirname, "../../public/uploads"))
);

module.exports = router;
