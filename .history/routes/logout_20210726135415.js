const { Router } = require("express");
const session = require("express-session");
const router = Router();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  req.session.destroy();
  console.log("req.session destroyed");
});

module.exports = router;
