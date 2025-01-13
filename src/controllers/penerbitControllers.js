const penerbitServices = require("../services/penerbitServices");

const getAllPenerbit = async (req, res, next) => {
  try {
    const data = await penerbitServices.getAllPenerbit();
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getPenerbitById = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await penerbitServices.getPenerbitById(params);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createPenerbit = async (req, res, next) => {
  try {
    const params = req.body;
    const data = await penerbitServices.createPenerbit(params);
    return res.status(201).json({ data, message: "Data created" });
  } catch (err) {
    next(err);
  }
};

const updatePenerbit = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await penerbitServices.updatePenerbit(params);
    return res.status(200).json({ data, message: "Data updated" });
  } catch (err) {
    next(err);
  }
};

const deletePenerbit = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await penerbitServices.deletePenerbit(params);
    return res.status(200).json({ data, message: "Data deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPenerbit,
  getPenerbitById,
  createPenerbit,
  updatePenerbit,
  deletePenerbit,
};
