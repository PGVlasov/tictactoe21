const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.get("/", async (req, res, next) => {
  console.log("req", req);
  const user = await User.find();

  res.send(user);
  console.log("res", res);
});

module.exports = router;
