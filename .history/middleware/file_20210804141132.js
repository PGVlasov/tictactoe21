const multer = require("multer");

const storage = multer.diskStorage();

const fileFilter = (req, file, cd) => {};

module.exports = multer({});
