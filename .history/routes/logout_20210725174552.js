const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/logout", async (req, res, next) => {
  req.session.distroy(() => console.log("session killd"));
});

module.exports = router;
