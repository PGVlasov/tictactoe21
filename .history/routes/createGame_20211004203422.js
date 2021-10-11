const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/createGame", async (req, res) => {
  console.log("somthing");
});

module.exports = router;
