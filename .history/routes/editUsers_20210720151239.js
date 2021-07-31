var express = require("express");
var router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/", async (req, res) => {
  const { id } = req.body;
  console.log(req.body);

  await User.findByIdAndUpdate(id, req.body);
  console.log(req.body);
});

module.exports = router;