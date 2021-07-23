var express = require("express");
var router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/", async (req, res) => {
  const { id } = User.id;
  console.log(req.body);
  console.log(req.body.id);
  await User.findOneAndUpdate(req.body);
});

module.exports = router;
