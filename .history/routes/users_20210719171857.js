var express = require("express");
var router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const AddUser = require("../models/addUser");
const db = require("../data/usersdb.json");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

// async function postUser() {
//   const users = await User.find();
//   let json = JSON.stringify(users);
//   console.log(json);
//   console.log(`json -1 :  ${json[2]}`);
// }

// router.post("/", async (req, res, next) => {
//   const user = new User({
//     name: req.body.name,
//     age: req.body.age,
//     adress: req.body.adress,
//   });

//   try {
//     user.save();
//   } catch (e) {
//     console.log(e);
//   }
// });

// router.post("/", async (req, res) => {
//   const { id } = req.body;
//   delete req.body.id;
//   await User.findByIdAndUpdate(id, req.body);
// });

router.post("/", async (req, res, next) => {
  const user = new User({
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

// router.get("/", async (req, res, next) => {
//   const user = await AddUser.find();

//   res.send(user);
//   //console.log(user);
// });

router.get("/", async (req, res, next) => {
  const user = await User.find();

  res.send(user);
  //console.log(user);
});

module.exports = router;