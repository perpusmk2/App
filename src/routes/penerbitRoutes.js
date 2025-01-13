const router = require("express").Router();

const penerbitController = require("../controllers/penerbitControllers");

router.get("/", penerbitController.getAllPenerbit);
router.get("/:id", penerbitController.getPenerbitById);
router.post("/", penerbitController.createPenerbit);
router.put("/:id", penerbitController.updatePenerbit);
router.delete("/:id", penerbitController.deletePenerbit);

module.exports = router;
