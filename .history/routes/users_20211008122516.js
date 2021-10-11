const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.get("/", async (req, res) => {
  res.render("profile", {
    user: req.user.toObject(),
  });
  console.log("user", user);
});

router.get("/", async (req, res, next) => {
  const user = await User.findOne({ email });
  //const user = await User.findById(req.user._id);
  console.log(user);
  res.send(user);
});

module.exports = router;
