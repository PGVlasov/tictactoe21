const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  console.log(req.session);
  delete req.session;
  console.log("req.session destroyed");
  res.redirect("/users");
});

module.exports = router;
