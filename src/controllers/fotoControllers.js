const fotoServices = require("../services/fotoServices");

const findAllFoto = async (req, res, next) => {
  try {
    const data = await fotoServices.findAllFoto();
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const findFotoById = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await fotoServices.findFotoById(params);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createFoto = async (req, res, next) => {
  try {
    const params = req.body;
    console.log(params);
    const data = await fotoServices.createFoto(params);
    return res.status(200).json({ data, message: "Data created" });
  } catch (err) {
    next(err);
  }
};

const uploadFoto = async (req, res, next) => {
  try {
    const url = await fotoServices.uploadFoto(req.file);
    return res.status(200).json({ url, message: "Image uploaded" });
  } catch (err) {
    next(err);
  }
};

const updateFoto = async (req, res, next) => {
  try {
    const params = req.body;
    const data = await fotoServices.updateFoto(params);
    return res.status(200).json({ data, message: "Data updated" });
  } catch (err) {
    next(err);
  }
};

const deleteFoto = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await fotoServices.deleteFoto(params);
    return res.status(200).json({ data, message: "Data deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllFoto,
  findFotoById,
  uploadFoto,
  createFoto,
  updateFoto,
  deleteFoto,
};
