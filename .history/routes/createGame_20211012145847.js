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
  console.log("somthing");
  console.log(req.body);
  const game = await createGame.findOneAndDelete(
    "http://localhost:3000/game/:17c6aae550f"
  );
  console.log("DELETE", game);
  try {
    await game.save();
  } catch (e) {
    console.log(e);
  }
});

router.post("/cliced", async (req, res) => {
  console.log("somthing");
  //   const game = await createGame.findOneAndUpdate(
  //     "http://localhost:3000/game/:17c6adc67a1",
  //     { cliked: cliced + 1 }
  //   );
  // const game = await createGame.findOne({"http://localhost:3000/game/:17c6adc67a1"});
  console.log("CLICED", req.body);
  //   try {
  //     await game.save();
  //   } catch (e) {
  //     console.log(e);
  //   }
});

router.get("/", async (req, res, next) => {
  const games = await createGame.find();

  res.send(games);
});

module.exports = router;
