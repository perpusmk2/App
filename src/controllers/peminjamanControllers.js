const peminjamanServices = require("../services/peminjamanServices");

const getAllPeminjaman = async (req, res, next) => {
  try {
    const data = await peminjamanServices.getAllPeminjaman();
    res.status(200).json({ data, message: "Data found" });
  } catch (error) {
    next(error);
  }
};

const getPeminjamanById = async (req, res, next) => {
  try {
    const data = await peminjamanServices.getPeminjamanById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const createPeminjaman = async (req, res, next) => {
  try {
    const data = await peminjamanServices.createPeminjaman(req.body);
    res.status(201).json({ data, message: "Data created" });
  } catch (error) {
    next(error);
  }
};

const updatePeminjaman = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await peminjamanServices.updatePeminjaman(params);
    res.status(200).json({ data, message: "Data updated" });
  } catch (error) {
    next(error);
  }
};

const deletePeminjaman = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await peminjamanServices.deletePeminjaman(params);
    return res.status(200).json({ data, message: "Data deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPeminjaman,
  getPeminjamanById,
  createPeminjaman,
  updatePeminjaman,
  deletePeminjaman,
};
