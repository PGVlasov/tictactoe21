const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  //delete req.session;
  //   req.session.destroy((error) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //   });
  // req.session = null;
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
  });
  console.log("req.session destroyed");
  //   );
});

module.exports = router;
