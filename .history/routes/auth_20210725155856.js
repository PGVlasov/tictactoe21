const { Router } = require("express");
const session = require("express-session");
const router = Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  const user = User.findById("60f5a8837483cc4594518309");

  req.session.isAuthentificated = true;
  console.log(` status isAuthentificated ${req.session.isAuthentificated}`);
});

router.get("/", async (req, res, next) => {
  const authStatus = { isAuthentificated: req.session.isAuthentificated };
  res.send(authStatus);
  console.log(authStatus);
});

module.exports = router;
