const sumberServices = require("../services/sumberServices");

const getAllSumber = async (req, res, next) => {
  try {
    const data = await sumberServices.getAllSumber();
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getSumberById = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await sumberServices.getSumberById(params);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createSumber = async (req, res, next) => {
  try {
    const params = req.body;
    const data = await sumberServices.createSumber(params);
    return res.status(201).json({ data, message: "Data created" });
  } catch (err) {
    next(err);
  }
};

const updateSumber = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await sumberServices.updateSumber(params);
    return res.status(200).json({ data, message: "Data updated" });
  } catch (err) {
    next(err);
  }
};

const deleteSumber = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await sumberServices.deleteSumber(params);
    return res.status(200).json({ data, message: "Data deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllSumber,
  getSumberById,
  createSumber,
  updateSumber,
  deleteSumber,
};
