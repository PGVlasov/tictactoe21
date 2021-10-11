const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/createGame", async (req, res) => {
  console.log("somthing");
  const user = new createGame({
    id: req.body.id,
    creator: req.body.creator,
    name: req.body.title,
  });
});

module.exports = router;
