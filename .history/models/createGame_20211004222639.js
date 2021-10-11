const { Schema, model } = require("mongoose");

const createGame = new Schema({
  id: {
    type: Number,
    required: true,
  },
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
