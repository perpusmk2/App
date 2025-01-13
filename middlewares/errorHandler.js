const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  if (err.name === "ErrorNotFound") {
    res
      .status(404)
      .json({ name: "Error Not Found", message: err.message || "Not Found" });
  } else if (err.name === "DataExist") {
    res
      .status(409)
      .json({ name: "Data Exist", message: err.message || "Data Exist" });
  } else if (err.name === "ErrorBadRequest") {
    res.status(400).json({
      name: "Error Bad Request",
      message: err.message || "Bad Request",
    });
  }
};

module.exports = errorHandler;
