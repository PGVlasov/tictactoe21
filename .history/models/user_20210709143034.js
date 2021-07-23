const fs = require("fs");
const path = require("path");

class User {
  constructor(name, age, adress) {
    (this.name = name),
      (this.age = age),
      (this.adress = adress),
      (this.id = Math.random());
  }

  save() {}

  static getAll() {
    fs.readFile(path.join(__dirname, "..", "data", "user.json"));
  }
}
module.exports = User;
