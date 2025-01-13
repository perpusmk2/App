const express = require("express");
const router = express.Router();

const anggotaRoute = require("./anggotaRoutes");
router.use("/api/anggota", anggotaRoute);

const tagRoute = require("./tagRoutes");
router.use("/api/tag", tagRoute);

module.exports = router;
