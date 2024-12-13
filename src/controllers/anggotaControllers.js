const anggotaServices = require("../services/anggotaServices");

const getAllAnggota = async (req, res, next) => {
  try {
    const data = await anggotaServices.getAllAnggota();
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getAnggotaById = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await anggotaServices.getAnggotaById(+params);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    if (data.kategori === "SISWA") {
      const { guru, ...rest } = data;
      return res.status(200).json(rest);
    } else if (data.kategori === "GURU") {
      const { siswa, ...rest } = data;
      return res.status(200).json(rest);
    } else {
      return res.status(200).json(data);
    }
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

const updateAnggota = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await anggotaServices.updateAnggota(+id, req.body);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllAnggota,
  getAnggotaById,
  createAnggota,
};
