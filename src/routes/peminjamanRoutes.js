const router = (module.exports = require("express").Router());
const peminjamanController = require("../controllers/peminjamanControllers");

router.get("/", peminjamanController.getAllPeminjaman);
router.get("/:id", peminjamanController.getPeminjamanById);
router.post("/", peminjamanController.createPeminjaman);
router.put("/:id", peminjamanController.updatePeminjaman);
router.delete("/:id", peminjamanController.deletePeminjaman);
