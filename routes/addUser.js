const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res, next) => {
  try {
    const email = req.body.email;
    const candidate = await User.findOne({ email });

    if (candidate) {
      return console.error("такой пользователь уже существует");
    } else {
      const hadhPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        email: req.body.email,
        password: hadhPassword,
        name: req.body.name,
        age: req.body.age,
        adress: req.body.adress,
      });

      try {
        user.save();
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;