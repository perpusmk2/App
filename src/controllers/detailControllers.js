const detailServices = require("../services/detailServices");

const getAllDetail = async (req, res, next) => {
  try {
    const data = await detailServices.getAllDetail();
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getDetailById = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await detailServices.getDetailById(+params);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createDetail = async (req, res, next) => {
  try {
    const params = req.body;
    const data = await detailServices.createDetail(params);
    return res.status(201).json({ data, message: "Data created" });
  } catch (err) {
    next(err);
  }
};

const updateDetail = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await detailServices.updateDetail(params);
    return res.status(200).json({ data, message: "Data updated" });
  } catch (err) {
    next(err);
  }
};

const deleteDetail = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await detailServices.deleteDetail(+params);
    return res.status(200).json({ data, message: "Data deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDetail,
  getDetailById,
  createDetail,
  updateDetail,
  deleteDetail,
};
