const anggotaServices = require("../services/anggotaServices");

const getAllAnggota = async (req, res, next) => {
  try {
    const data = await anggotaServices.getAllAnggota();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getAnggotaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await anggotaServices.getAnggotaById(+id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createAnggota = async (req, res, next) => {
  try {
    const data = await anggotaServices.createAnggota(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllAnggota,
  getAnggotaById,
  createAnggota,
};
