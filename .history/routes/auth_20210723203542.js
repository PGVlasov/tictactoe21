const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.post("/auth", async (req, res) => {
  req, (session.isAuthentificated = true);
});

module.exports = router;
