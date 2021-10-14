const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/", async (req, res) => {
  console.log("somthing");
  console.log("SAVE TO BD", req.body);
  const game = new createGame({
    creator: req.body.creator,
    url: req.body.title,
    cliced: req.body.cliced,
  });
  try {
    await game.save();
  } catch (e) {
    console.log(e);
  }
});

router.post("/delete", async (req, res) => {
  try {
    const game = await createGame.findByIdAndDelete(req.body.id);
  } catch (e) {
    console.log(e);
  }
});

router.post("/cliced", async (req, res) => {
  iD = req.body.id;
  //   console.log("GAME ID:", req.body.id);
  try {
    console.log("CLICED FROM CLAENT", req.body.cliced);
    const game = await createGame.findByIdAndUpdate(iD, req.body);
    console.log("Changed Game", game);

    await game.save();
  } catch (e) {
    console.log(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const games = await createGame.find();
    res.send(games);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
