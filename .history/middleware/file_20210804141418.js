const multer = require("multer");

const storage = multer.diskStorage({
  destination() {
    cb(null, "images");
  },
  filename() {},
});

const fileFilter = (req, file, cb) => {};

module.exports = multer({
  storage,
  fileFilter,
});
