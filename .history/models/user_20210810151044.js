const { Schema, model } = require("mongoose");

const user = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  resetToken: String,
  resetTokenExp: Date,
  avatarUrl: String,
  adress: {
    type: String,
    required: true,
  },
});

module.exports = model("User", user);
