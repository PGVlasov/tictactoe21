const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.post("/login", async (req, res) => {
  req, (session.isAuthentificated = true);
});

mobule.exports = router;
