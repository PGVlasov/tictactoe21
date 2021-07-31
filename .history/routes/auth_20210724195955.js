const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.post("/", async (req, res) => {
  req.session.isAuthentificated = true;

  console.log(` status isAuthentificated ${req.session.isAuthentificated}`);
  console.log("jjjjjj");
  console.log(` status isAuthentificated ${req.session.isAuth}`);
});

module.exports = router;
