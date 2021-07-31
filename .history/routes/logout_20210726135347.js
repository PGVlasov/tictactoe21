const { Router } = require("express");
const session = require("express-session");
const router = Router();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  const user = await User.findById("60f5a8837483cc4594518309");
  user.req.session.destroy();
  console.log("req.session destroyed");
});

module.exports = router;