const router = require("express").Router();

const sumbanganController = require("../controllers/sumbanganControllers");

router.get("/", sumbanganController.getAllSumbangan);
router.get("/:id", sumbanganController.getSumbanganById);
router.post("/", sumbanganController.createSumbangan);
router.put("/:id", sumbanganController.updateSumbangan);
router.delete("/:id", sumbanganController.deleteSumbangan);

module.exports = router;
