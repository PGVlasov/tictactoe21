const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.get("/", async (req, res, next) => {
  const user = await User.find();

  // res.send(user);
});
// const user = await User.findById("60f5a8837483cc4594518309")

router.post("/", (req, res) => {
  try {
    // const user = await User.findById("60f5a8837483cc4594518309") r }
    console.log(req.body);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
