var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
const User = require("../models/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  // fs.readFile(
  //     path.join(__dirname, "..", "data", "user.json"),
  //     JSON.stringify(user),
  //     (err) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve();
  //       }
  //     }
  //   );
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
    {
      id: 1,
      //   username: "Petr",
      range: 999,
      email: "pvlasov@ya.ru",
      name: "Petr",
      age: 33,
      sex: "male",
      adress: "St.P",
    },
  ]);
});

router.post("/", async (req, res, next) => {
  const user = new User(req.body.name, req.body.age, req.body.adress);
  console.log("name: ", req.body.name);
  console.log("age: ", req.body.age);
  console.log("adresss: ", req.body.adress);

  console.log(user);

  fs.writeFile(
    path.join(__dirname, "..", "data", "user.json"),
    JSON.stringify(user),
    (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }
  );
  //   await user.save();
});

module.exports = router;
