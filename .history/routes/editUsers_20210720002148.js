var express = require("express");
var router = express.Router();
const User = require("../models/user");
const db = require("../data/usersdb.json");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

// router.post("/", async (req, res, next) => {
//   const user = new User({
//     email: req.body.email,
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

module.exports = router;