const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.post("/", async (req, res) => {
  req.session.isAuthentificated = true;

  console.log(` status isAuthentificated ${req.session.isAuthentificated}`);
});

router.get("/", async (req, res, next) => {
  res.send(req.session.isAuthentificated);
});

module.exports = router;
