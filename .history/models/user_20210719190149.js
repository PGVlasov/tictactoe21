const { Schema, model } = require("mongoose");

const user = new Schema({
  //   email: {
  //     type: String,
  //     required: true,
  //   },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
});

module.exports = model("User", user);
