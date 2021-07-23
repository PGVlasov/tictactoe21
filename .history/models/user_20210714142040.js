const { Schema, model } = require("mongoose");

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model("User", user);

// const fs = require("fs");
// const path = require("path");

// class User {
//   constructor(name, age, adress) {
//     (this.name = name), (this.age = age), (this.adress = adress);
//   }

//   toJSON() {
//     return {
//       name: this.name,
//       age: this.age,
//       adress: this.adress,
//     };
//   }

// }
// module.exports = User;
