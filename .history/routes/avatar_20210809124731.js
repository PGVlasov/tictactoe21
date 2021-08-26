const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/avatar", (req, res) => {
  try {
    const { avatar } = req.body;
    console.log(req.body);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
