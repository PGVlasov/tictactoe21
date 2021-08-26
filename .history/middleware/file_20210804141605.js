const multer = require("multer");

const storage = multer.diskStorage({
  destination() {
    cb(null, "images");
  },
  filename() {
    cb(null, new Date().toISOString() + "-" + file.filename());
  },
});

const fileFilter = (req, file, cb) => {};

module.exports = multer({
  storage,
  fileFilter,
});
