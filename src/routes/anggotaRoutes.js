const router = require("express").Router();

const anggotaController = require("../controllers/anggotaControllers");

router.get("/", anggotaController.getAllAnggota);

module.exports = router;
