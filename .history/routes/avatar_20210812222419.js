const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.get("/", async (req, res, next) => {
  const user = await User.find();

  // res.send(user);
});

router.post("/avatar", async (req, res) => {
  console.log(req.file);
  res.sendStatus(200);
  //console.log(res.body)
  // console.log(req[0].files);
  //   try {
  //     const user = await User.findById("610694be1251cd2a34cea17e");

  //     if (req.file) {
  //       user.avatarUrl = "";
  //     }

  //     Object.assign(user, toChahge);
  //     await user.save();
  //   } catch (e) {
  //     console.log(e);
  //   }
});

module.exports = router;
