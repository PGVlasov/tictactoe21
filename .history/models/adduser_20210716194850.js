const { Schema, model } = require("mongoose");

const addUser = new Schema({
  email: {
    type: email,
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
  adress: {
    type: String,
    required: true,
  },
});

module.exports = model("AddUser", addUserSchema);