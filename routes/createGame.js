const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/", async (req, res) => {
  const game = await new createGame({
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
    console.log("DELETE GAME", req.body);
    const game = await createGame.findByIdAndDelete(req.body.id);
  } catch (e) {
    console.log(e);
  }
});

router.post("/cliced", async (req, res) => {
  try {
    iD = req.body.id;
    const game = await createGame.findById(iD);
    const clicks = game.cliced + req.body.cliced;
    if (clicks < 2) {
      const game = await createGame.findByIdAndUpdate(iD, {
        cliced: clicks,
      });
      await game.save();
    } else {
      const game = await createGame.findByIdAndDelete(req.body.id);
    }
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
