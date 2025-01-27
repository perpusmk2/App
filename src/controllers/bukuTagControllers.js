const bukuTagServices = require("../services/bukuTagServices");

const getAllBukuTag = async (req, res) => {
  try {
    const data = await bukuTagServices.getAllBukuTag();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getBukuTagById = async (req, res) => {
  try {
    const data = await bukuTagServices.getBukuTagById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createBukuTag = async (req, res) => {
  try {
    const data = await bukuTagServices.createBukuTag(req.body);
    res.status(201).json({ data, message: "Data created" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBukuTag = async (req, res) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await bukuTagServices.updateBukuTag(params);
    res.status(200).json({ data, message: "Data updated" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBukuTag = async (req, res) => {
  try {
    const data = await bukuTagServices.deleteBukuTag(req.params.id);
    res.status(200).json({ data, message: "Data deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllBukuTag,
  getBukuTagById,
  createBukuTag,
  updateBukuTag,
  deleteBukuTag,
};
