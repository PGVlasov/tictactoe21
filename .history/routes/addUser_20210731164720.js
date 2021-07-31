const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    adress: req.body.adress,
  });

  try {
    user.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
