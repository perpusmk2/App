const router = require("express").Router();

const anggotaController = require("../controllers/anggotaControllers");

router.get("/", anggotaController.getAllAnggota);
router.get("/:id", anggotaController.getAnggotaById);
router.post("/", anggotaController.createAnggota);
router.put("/:id", anggotaController.updateAnggota);

module.exports = router;
