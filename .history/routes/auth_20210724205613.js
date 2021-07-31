const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.post("/", async (req, res) => {
  req.session.isAuthentificated = true;

  console.log(` status isAuthentificated ${req.session.isAuthentificated}`);
});

router.get("/", async (req, res, next) => {
  const status = { isAuthentificated: req.session.isAuthentificated };
  res.send(status);
  console.log(status);
});

module.exports = router;
