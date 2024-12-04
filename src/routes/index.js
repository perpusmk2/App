const express = require("express");
const router = express.Router();

const anggotaRoute = require("./anggotaRoutes");
router.use("/api/anggota", anggotaRoute);

module.exports = router;
