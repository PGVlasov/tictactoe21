const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
    req.session = null;
    console.log("req.session destroyed");
  });
});

module.exports = router;
