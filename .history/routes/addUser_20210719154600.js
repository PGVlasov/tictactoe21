var express = require("express");
var router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const AddUser = require("../models/adduser");
const db = require("../data/usersdb.json");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/", async (req, res, next) => {
  const user = new addUser({
    email: req.boby.email,
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
