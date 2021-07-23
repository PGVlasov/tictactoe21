var express = require("express");
var router = express.Router();
const fs = require("fs").promises;
//const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const db = require("../data/user.json");

router.post("/", async (req, res, next) => {
  const user = new User(req.body.name, req.body.age, req.body.adress);
  console.log(user);

  (async () => {
    await fs.writeFile(
      path.join(__dirname, "..", "data", "user.json"),
      JSON.stringify(user),
      (err) => {
        if (err) {
          reject(err);
        }
      }
    );
  })();

  //   fs.writeFile(
  //     path.join(__dirname, "..", "data", "user.json"),
  //     JSON.stringify(user),
  //     (err) => {
  //       if (err) {
  //         reject(err);
  //       }
  //     }
  //   );
  // await user.save();
});

/* GET users listing. */

router.get("/", async (req, res, next) => {
  (async () => {
    await res.json([db]);
  })();
  //   res.json([db]);
});

module.exports = router;
