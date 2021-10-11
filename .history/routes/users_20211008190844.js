const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/", async (req, res) => {
  console.log("ID FROM CLIENT", req.body);
});

router.get("/", async (req, res, next) => {
  // console.log("req.body", req.body);
  const user = await User.findOne(req.body._id);
  //const user = await User.findById(req.user._id);
  console.log("USER", user);
  //   res.send(user);
});

module.exports = router;
