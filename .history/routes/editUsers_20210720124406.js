var express = require("express");
var router = express.Router();
const User = require("../models/user");
const db = require("../data/usersdb.json");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/", async (req, res) => {
  const { id } = req.body;
  delete req.body.id;
  await Course.findByIdAndUpdate(id, req.body);
  res.redirect("/courses");
});

module.exports = router;
