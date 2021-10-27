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
  iD = req.body.id;
  try {
    //   const game1 = await createGame.findByIdAndUpdate(iD, req.body);
    //   await game1.save();
    const game = await createGame.findById(iD);
    const newClicked = game.cliced + req.body.cliced;
    console.log("game cliced", game.cliced);
    console.log("newClicked", newClicked);
    if (newClicked < 2) {
      const game = await createGame.findByIdAndUpdate(iD, {
        cliced: newClicked,
      });
      await game.save();
    } else {
      const game = await createGame.findByIdAndDelete(req.body.id);
    }
  } catch (e) {
    console.log(e);
  }
  //   console.log("GAME ID:", req.body.id);
  //   try {
  //     console.log("CLICED FROM CLAENT", req.body.cliced);
  //     if (req.body.cliced < 2) {
  //       const game = await createGame.findByIdAndUpdate(iD, req.body);
  //       console.log("Changed Game", game);

  //       await game.save();
  //     } else {
  //       const game = await createGame.findByIdAndDelete(req.body.id);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
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
