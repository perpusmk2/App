const router = (module.exports = require("express").Router());
const bukuTagController = require("../controllers/bukuTagControllers");

router.get("/", bukuTagController.getAllBukuTag);
router.get("/:id", bukuTagController.getBukuTagById);
router.post("/", bukuTagController.createBukuTag);
router.put("/:id", bukuTagController.updateBukuTag);
router.delete("/:id", bukuTagController.deleteBukuTag);
