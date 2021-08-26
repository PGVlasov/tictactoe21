const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/avatar", async (req, res) => {
  //   const { avatar } = req.body;
  //   await User.findOneAndUpdate(avatar);
});

module.exports = router;
