const router = (module.exports = require("express").Router());
const fotoController = require("../controllers/fotoControllers");
const multer = require("../../lib/multer");

router.get("/", fotoController.findAllFoto);
router.get("/:id", fotoController.findFotoById);
router.post("/", fotoController.createFoto);
router.post("/upload", multer, fotoController.uploadFoto);
router.put("/:id", fotoController.updateFoto);
router.delete("/:id", fotoController.deleteFoto);
