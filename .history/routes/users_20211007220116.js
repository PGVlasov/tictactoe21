const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

// router.get("/", auth, async (req, res) => {
//     res.render("profile", {
//       title: "Профиль",
//       isProfile: true,
//       user: req.user.toObject(),
//     });
//   });

router.get("/", async (req, res, next) => {
  //   const user = await User.find();
  const user = await User.findById(req.user._id);

  res.send(user);
});

module.exports = router;