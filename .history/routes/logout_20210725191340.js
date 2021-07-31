const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  // req.session = null;
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("req.session destroyed");
    }
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
