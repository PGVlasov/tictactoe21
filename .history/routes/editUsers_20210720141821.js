var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", true);

router.post("/", async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  delete req.body.id;
  await User.findByIdAndUpdate(id, req.body);
});

module.exports = router;
