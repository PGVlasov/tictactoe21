const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/", async (req, res) => {
  console.log("somthing");
  console.log(req.body);
  const game = new createGame({
    id: req.body.id,
    creator: req.body.creator,
    url: req.body.title,
  });
  await game.save();
});

module.exports = router;
