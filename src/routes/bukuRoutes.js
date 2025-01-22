const router = (module.exports = require("express").Router());
const bukuController = require("../controllers/bukuControllers");

router.get("/", bukuController.getAllBuku);
router.get("/:id", bukuController.getBukuById);
router.post("/", bukuController.createBuku);
router.put("/:id", bukuController.updateBuku);
router.delete("/:id", bukuController.deleteBuku);
