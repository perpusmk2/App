const sumbanganServices = require("../services/sumbanganServices");

const getAllSumbangan = async (req, res, next) => {
  try {
    const data = await sumbanganServices.getAllSumbangan();
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getSumbanganById = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await sumbanganServices.getSumbanganById(params);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createSumbangan = async (req, res, next) => {
  try {
    const params = req.body;
    const data = await sumbanganServices.createSumbangan(params);
    return res.status(201).json({ data, message: "Data created" });
  } catch (err) {
    next(err);
  }
};

const updateSumbangan = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await sumbanganServices.updateSumbangan(params);
    return res.status(200).json({ data, message: "Data updated" });
  } catch (err) {
    next(err);
  }
};

const deleteSumbangan = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await sumbanganServices.deleteSumbangan(params);
    return res.status(200).json({ data, message: "Data deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllSumbangan,
  getSumbanganById,
  createSumbangan,
  updateSumbangan,
  deleteSumbangan,
};
