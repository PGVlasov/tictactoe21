const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.post("/", async (req, res) => {
  req.session.isAuthentificated = true;

  console.log(` status isAuthentificated ${req.session.isAuthentificated}`);
});

router.get("/", async (req, res, next) => {
  const authStatus = { isAuthentificated: req.session.isAuthentificated };
  res.send(authStatus);
  console.log(authStatus);
});

module.exports = router;
