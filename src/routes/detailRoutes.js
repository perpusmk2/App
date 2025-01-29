const router = (module.exports = require("express").Router());
const detailController = require("../controllers/detailControllers");

router.get("/", detailController.getAllDetail);
router.get("/:id", detailController.getDetailById);
router.post("/", detailController.createDetail);
router.put("/:id", detailController.updateDetail);
router.delete("/:id", detailController.deleteDetail);
