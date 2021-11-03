const { Router } = require("express");
const session = require("express-session");
const router = Router();
const User = require("../models/user");

router.post("/logout", async (req, res) => {
  req.session.destroy();
  res.json(false);
});

module.exports = router;
