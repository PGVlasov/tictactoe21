var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
const User = require("../models/user");
//const db = require("../data/user.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  fs.readFile(path.join(__dirname, "..", "data", "user.json"), (err, data) => {
    const db = JSON.parse(data);
    console.log(db);
  });

  //   res.send(db);

  res.json([
    db,
    // {
    //   name: "Petr",
    //   age: 33,
    //   adress: "St.P",
    // },
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
      }
    }
  );
  // await user.save();
});

module.exports = router;
