const { Router } = require("express");
const User = require("../models/user");
// const session = require("express-session");
const router = Router();

router.post("/auth", async (req, res) => {
  const user = await User.findById("60f5a8837483cc4594518309");
  req.session.user = user;
  req.session.isAuthentificated = true;
  req.session.save((err) => {
    if (err) {
      throw err;
    }
    console.log(` status isAuthentificated ${req.session.isAuthentificated}`);
    console.log(req.session.id);
  });
});
router.get("/logout", (req, res) => {
  console.log(req.session.id);
  if (req.session) {
    req.session.cookie.maxAge = 0;
    delete req.session;
  }
  res.status(200).send("User has been logged out");
});

router.get("/status", async (req, res, next) => {
  const authStatus = { isAuthentificated: req.session.isAuthentificated };
  res.send(authStatus);
  console.log(authStatus);
});

module.exports = router;