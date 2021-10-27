const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/users", async (req, res, next) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send([user]);
    console.log([user]);
  } catch (e) {
    console.log(e);
  }
});

router.post("/gameparticipants", async (req, res, next) => {
  //console.log("ID FROM CLIENT", req.body);
  try {
    const user = await User.findById(req.body.userId);
    res.send([user]);
    console.log([user]);
  } catch (e) {
    console.log(e);
  }
});

router.get("/rating", async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
    console.log(users);
  } catch (e) {
    console.log(e);
  }
});

router.post("/delete", async (req, res) => {
  try {
    console.log("delete user", req.body);
    const user = await User.findByIdAndDelete(req.body.id);
    //  const user = await User.findById(req.body.userId);
    // console.log("USER TO DELETE", user);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
