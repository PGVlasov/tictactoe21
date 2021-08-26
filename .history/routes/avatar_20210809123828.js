const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/avatar", async (req, res) => {
  const { avatar } = req.body;
  console.log(req.body);
});

module.exports = router;
