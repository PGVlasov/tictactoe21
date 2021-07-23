var express = require("express");
var router = express.Router();
const User = require("../models/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
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

  await user.save();
});

module.exports = router;
