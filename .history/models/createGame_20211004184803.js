const { Schema, model } = require("mongoose");

const createGame = new Schema({
  id: {
    type: String,
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
