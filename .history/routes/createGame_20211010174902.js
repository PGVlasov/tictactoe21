const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/", async (req, res) => {
  console.log("somthing");
  console.log("SAVE TO BD", req.body);
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

router.post("/delete", async (req, res) => {
  console.log("somthing");
  console.log(req.body);
  const game = await createGame.findOneAndDelete(
    "http://localhost:3000/game/:17c695bdef7"
  );
  console.log.log("DELETE", game);
  try {
    await game.save();
  } catch (e) {
    console.log(e);
  }
});

router.get("/", async (req, res, next) => {
  const games = await createGame.find();

  console.log("SEND", games);
  res.send(games);
});

module.exports = router;
