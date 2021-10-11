const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/users", async (req, res, next) => {
  //console.log("ID FROM CLIENT", req.body);
  const user = await User.findById(req.body.userId);
  res.send([user]);
});

router.get("/", async (req, res, next) => {
  // console.log("req.body", req.body);
  const user = await User.find();
  //const user = await User.findById(req.user._id);
  console.log("USER FETCH", user);
  console.log("USER FETCH type", typeof user);
  res.send(user);
});

module.exports = router;
