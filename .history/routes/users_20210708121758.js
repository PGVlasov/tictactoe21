var express = require("express");
var router = express.Router();

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

router.post("/", function (req, res, next) {
  console.log(res.boby);
});

module.exports = router;
