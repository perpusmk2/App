const anggotaServices = require("../services/anggotaServices");

const getAllAnggota = async (req, res, next) => {
  try {
    const data = await anggotaServices.getAllAnggota();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllAnggota,
};
