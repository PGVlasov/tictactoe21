const { Router } = require("express");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const sendgreed = require("nodemailer-sendgrid-transport");
const User = require("../models/user");
// const session = require("express-session");
const router = Router();

router.post("/auth", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const candidate = await User.findOne({ email });
  try {
    if (candidate) {
      const areSame = await bcrypt.compare(password, candidate.password);

      if (areSame) {
        req.session.user = candidate;
        req.session.isAuthentificated = true;
        req.session.save((err) => {
          if (err) {
            throw err;
          }
          console.log(
            ` status isAuthentificated ${req.session.isAuthentificated}`
          );
          console.log(req.session.id);
        });
      } else {
        console.log("неверный пароль");
      }
    } else {
      console.log("пользователь отсутствует в системе");
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/logout", (req, res) => {
  //   console.log(req.session.id);
  //   req.session.destroy((error) => {
  //     req.session = null;
  //     if (error) return next(error);

  //     res.send({ logout: true });
  //   });
  req.session.isAuthentificated = false;
  console.log(req.session.isAuthentificated);
});

router.get("/status", async (req, res, next) => {
  const authStatus = { isAuthentificated: req.session.isAuthentificated };
  res.send(authStatus);
  console.log(authStatus);
});

module.exports = router;
