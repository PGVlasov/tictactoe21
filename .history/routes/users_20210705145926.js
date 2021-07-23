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
      email: "pppp@ppp.ru",
      name: "Petr",
      age: 33,
      sex: "male",
      adress: "St.P",
    },
  ]);
});

module.exports = router;

// <h3>Игрок</h3>
// <p>Рейтинг (количество побед): {this.showRange(range)}</p>
// <p>
//   Email: <strong>{"user.email"}</strong>
// </p>

// <p>
//   Имя: <strong>{`user.name`}</strong>
// </p>
// <p>
//   Ваше возраст: <strong>{`user.age`}</strong>
// </p>
// <p>
//   Пол: <strong>{`user.sex`}</strong>
// </p>
// <p>
//   Город: <strong>{`user.adress`}</strong>
// </p>
