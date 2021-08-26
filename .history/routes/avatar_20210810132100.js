const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/", (req, res) => {
  try {
    // const { avatar } = req.file;
    console.log(req.body);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
