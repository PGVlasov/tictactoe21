var express = require("express");
var router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const db = require("../data/usersdb.json");

function postUser() {
  // router.get("/", async (req, res, next) => {
  //   const users = await User.find();
  //   console.log(users);
  //   postUser();
  // });
  if (users == []) {
    console.log("yesss");
  } else {
    console.log("no");
  }
}

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

// router.post('/', async (req, res) => {
//     const {id} = req.body
//     delete req.body.id
//     await Course.findByIdAndUpdate(id, req.body)
//     res.redirect('/courses')
//   })

router.get("/", async (req, res, next) => {
  const users = await User.find();
  postUser(users);
  res.send(users);
  console.log(users);
});

module.exports = router;