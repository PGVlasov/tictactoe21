const { Router } = require("express");
const session = require("express-session");
const router = Router();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  const user = await User.findById("60f5a8837483cc4594518309");
  console.log(req.session._id);
  req.session.destroy();
  console.log("req.session destroyed");
  res.redirect("/users");
});

module.exports = router;
