const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

// const multer = require("multer");
// const upload = multer({ dest: "images/" });
// const filemiddeware = require("../middleware/file");

mongoose.set("useFindAndModify", false);

router.get("/", async (req, res, next) => {
  const user = await User.find();

  // res.send(user);
});

// router.post("/", filemiddeware.single("image"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   console.log(req.file);
// });

router.post("/", async (req, res) => {
  console.log("FILE", req.file);
  console.log("ID", req.body);

  let data = JSON.stringify(req.body);
  console.log("DATA", typeof data);
  res.sendStatus(200);

  try {
    const user = await User.findById("610694be1251cd2a34cea17e");
    //const user = await User.findById(req.body.userId);
    if (req.file) {
      user.avatarUrl = req.file.path;
    }

    await user.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
