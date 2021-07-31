const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  req.session.destroy();
  console.log("req.session destroyed");
});

module.exports = router;
