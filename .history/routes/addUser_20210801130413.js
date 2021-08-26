const express = require("express");
const bcrypt = require("bcryptjs");
const sendgreed = require("nodemailer-sendgrid-transport");
const User = require("../models/user");
// const session = require("express-session");
const keys = require("../keys/index");
const router = express.Router();

const transporter = nodemailer.createTransport(
  sendgreed({
    auth: { api_key: keys.SENDGRID_API_KEY },
  })
);

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
