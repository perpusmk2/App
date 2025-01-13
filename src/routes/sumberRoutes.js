const router = require("express").Router();

const sumberController = require("../controllers/sumberControllers");

router.get("/", sumberController.getAllSumber);
router.get("/:id", sumberController.getSumberById);
router.post("/", sumberController.createSumber);
router.put("/:id", sumberController.updateSumber);
router.delete("/:id", sumberController.deleteSumber);

module.exports = router;
