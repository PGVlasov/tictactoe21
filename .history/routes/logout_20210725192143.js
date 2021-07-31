const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  // req.session = null;
  req.session.destroy((error) => {
    if (req.session) {
      req.session.cookie.maxAge = 0;
      delete req.session;
    }
    res.status(200).send("User has been logged out");
  });
  // req.session = null;
  //   req.session.destroy((error) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //   });
  //   console.log("req.session destroyed");
  //   );
});

module.exports = router;
