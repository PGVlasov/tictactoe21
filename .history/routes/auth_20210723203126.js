const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.post("/", async (req, res) => {
  req, (session.isAuthentificated = true);
});

mobule.exports = router;
