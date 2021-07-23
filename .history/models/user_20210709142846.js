const fs = require("fs");

class User {
  constructor(name, age, adress) {
    (this.name = name),
      (this.age = age),
      (this.adress = adress),
      (this.id = Math.random());
  }

  save() {}

  static getAll;
}
module.exports = User;
