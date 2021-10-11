const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/", async (req, res) => {
  console.log("somthing");
  console.log(req.body);
  const game = new createGame({
    creator: req.body.creator,
    url: req.body.title,
  });
  try {
    await game.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
