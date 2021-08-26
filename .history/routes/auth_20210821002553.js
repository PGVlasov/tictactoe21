const { Router } = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sendgreed = require("nodemailer-sendgrid-transport");
const User = require("../models/user");
// const session = require("express-session");
const keys = require("../keys/index");
const resetEmail = require("../emails/reset");
const router = Router();

const transporter = nodemailer.createTransport(
  sendgreed({
    auth: { api_key: keys.SENDGRID_API_KEY },
  })
);

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
        res.json(true);
      } else {
        res.send("неверный пароль");
        console.log("неверный пароль");
      }
    } else {
      console.log("пользователь отсутствует в системе");
      console.log(req.boby);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/logout", async (req, res) => {
  //   console.log(req.session.id);
  //   req.session.destroy((error) => {
  //     req.session = null;
  //     if (error) return next(error);

  //     res.send({ logout: true });
  //   });
  req.session.isAuthentificated = false;
  console.log(req.session.isAuthentificated);
});

router.post("/reset", (req, res) => {
  try {
    crypto.randomBytes(32, async (err, buffer) => {
      try {
        if (err) {
          req.flash("error", "повторите попытку позже");
          return;
        } else {
          const token = buffer.toString("hex");

          const candidate = await User.findOne({ email: req.body.email });

          if (candidate) {
            candidate.resetToken = token;
            candidate.resetTokenExp = Date.now() + 60 * 60 * 1000;
            await candidate.save();
            console.log(candidate.email);

            await transporter.sendMail(resetEmail(candidate.email, token));
          } else {
            console.log("error такого пользователя не обнаружено");
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
    console.log("reset!!!");
  } catch (e) {
    console.log(e);
  }
});

router.post("/newPassword", async (req, res) => {
  try {
    const user = await User.findOne({
      resetToken: req.body.token,
    });

    console.log(user);

    if (user) {
      user.password = await bcrypt.hash(req.body.password, 10);
      user.resetToken = undefined;
      user.resetTokenExp = undefined;
      await user.save();
    } else {
      console.log("loginError Время жизни токена истекло");
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/status", async (req, res, next) => {
  const authStatus = { isAuthentificated: req.session.isAuthentificated };
  res.send(authStatus);
  console.log(authStatus);
});

module.exports = router;
