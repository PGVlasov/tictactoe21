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
    console.log(db.name);
    console.log(typeof db);
  });
  //   res.set("Content-Type", "text/html");
  //   res.send(dataBase);
  let userData = {
    name: " Peter",
    age: " 33",
    adress: " St.Petersbirg",
  };
  console.log(userData);
  console.log(userData.name);
  console.log(typeof userData);

  res.json([{ userData }]);
  try {
  } catch (e) {
    console.log(e);
  }
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
