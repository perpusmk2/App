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

const bukuRoute = require("./bukuRoutes");
router.use("/api/buku", bukuRoute);

const bukuTagRoute = require("./bukuTagRoutes");
router.use("/api/bukuTag", bukuTagRoute);

const peminjamanRoute = require("./peminjamanRoutes");
router.use("/api/peminjaman", peminjamanRoute);

const detailRoute = require("./detailRoutes");
router.use("/api/detail", detailRoute);

module.exports = router;
