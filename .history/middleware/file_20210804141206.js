const multer = require("multer");

const storage = multer.diskStorage();

const fileFilter = (req, file, cb) => {};

module.exports = multer({
  storage,
  fileFilter,
});
