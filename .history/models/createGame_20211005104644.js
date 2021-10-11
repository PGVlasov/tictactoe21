const { Schema, model } = require("mongoose");

const createGame = new Schema({
  creator: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = model("createGame", createGame);
