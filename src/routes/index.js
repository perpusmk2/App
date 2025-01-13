const express = require("express");
const router = express.Router();

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

module.exports = router;
