const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  delete req.session.user;
  console.log("req.session destroyed");
  res.redirect("/auth");
});

module.exports = router;
