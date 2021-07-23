var express = require("express");
var router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const AddUser = require("../models/addUser");
const db = require("../data/usersdb.json");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

async function postUser() {
  const users = await User.find();
  let json = JSON.stringify(users);
  console.log(json);
  console.log(`json -1 :  ${json[2]}`);
}

router.post("/", async (req, res, next) => {
  const user = new User({
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
