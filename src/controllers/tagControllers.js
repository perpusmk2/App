const tagServices = require("../services/tagServices");

const getAllTag = async (req, res, next) => {
  try {
    const data = await tagServices.getAllTag();
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getTagById = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await tagServices.getTagById(+params);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createTag = async (req, res, next) => {
  try {
    const params = req.body;
    const data = await tagServices.createTag(params);
    return res.status(201).json({ data, message: "Data created" });
  } catch (err) {
    next(err);
  }
};

const updateTag = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await tagServices.updateTag(params);
    return res.status(200).json({ data, message: "Data updated" });
  } catch (err) {
    next(err);
  }
};

const deleteTag = async (req, res, next) => {
  try {
    const params = req.params.id;
    const data = await tagServices.deleteTag(params);
    return res.status(200).json({ data, message: "Data deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllTag,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};
