var express = require("express");
var router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const db = require("../data/usersdb.json");

mongoose.set("useFindAndModify", false);

async function postUser(users) {
  //   const users = await User.find();
  if (!users) {
    console.log("1");
  } else {
    console.log("2");
  }
}

router.post("/", async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    adress: req.body.adress,
  });
  const { id } = req.body;
  delete req.body.id;
  await User.findByIdAndUpdate(id, req.body);

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
  const user = await User.find();
  postUser();
  res.send(user);
  console.log(user);
});

module.exports = router;
