var express = require("express");
var router = express.Router();
const fs = require("fs").promises;
//const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const db = require("../data/usersdb.json");

router.post("/", async (req, res, next) => {
  //const user = new User(req.body.name, req.body.age, req.body.adress);
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    adress: req.body.adress,
  });

  try {
    user.save();
  } catch (e) {
    console.log(e);
  }

  //   (async () => {
  //     await fs.writeFile(
  //       path.join(__dirname, "..", "data", "usersdb.json"),
  //       JSON.stringify(user),
  //       (err) => {
  //         if (err) {
  //           reject(err);
  //         }
  //       }
  //     );
  //   })();
});

/* GET users listing.
todo check async/await
*/

// router.get("/", async (req, res, next) => {
//   (async () => {
//     await res.json([db]);
//   })();
//   //   res.json([db]);
// });

router.get("/", async (req, res, next) => {
  // const users = await User.find();
  //   res.json({
  //     users,
  //   });
  console.log("users");
  //console.log(users);
});

module.exports = router;
