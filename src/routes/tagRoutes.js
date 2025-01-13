const router = require("express").Router();

const tagController = require("../controllers/tagControllers");

router.get("/", tagController.getAllTag);
router.get("/:id", tagController.getTagById);
router.post("/", tagController.createTag);
router.put("/:id", tagController.updateTag);
router.delete("/:id", tagController.deleteTag);

module.exports = router;
