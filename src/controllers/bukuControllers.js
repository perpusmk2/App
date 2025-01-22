const bukuServices = require("../services/bukuServices");

const getAllBuku = async (req, res, next) => {
  try {
    const data = await bukuServices.getAllBuku();
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getBukuById = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await bukuServices.getBukuById(params);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createBuku = async (req, res, next) => {
  try {
    const data = await bukuServices.createBuku(req.body);
    return res.status(201).json({ data, message: "Data created" });
  } catch (err) {
    next(err);
  }
};

const updateBuku = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await bukuServices.updateBuku(params);
    return res.status(200).json({ data, message: "Data updated" });
  } catch (err) {
    next(err);
  }
};

const deleteBuku = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await bukuServices.deleteBuku(params);
    return res.status(200).json({ data, message: "Data deleted" });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllBuku,
  getBukuById,
  createBuku,
  updateBuku,
  deleteBuku,
};
