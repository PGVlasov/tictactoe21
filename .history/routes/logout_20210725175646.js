const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  //delete req.session;
  req.session.distroy();
  console.log("session killd");
  //   );
});

module.exports = router;
