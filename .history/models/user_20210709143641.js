const fs = require("fs");
const path = require("path");

class User {
  constructor(name, age, adress) {
    (this.name = name),
      (this.age = age),
      (this.adress = adress),
      (this.id = Math.random());
  }

  save() {
    const user = User.getAll();
  }

  static getAll() {
    fs.readFile(
      path.join(__dirname, "..", "data", "user.json"),
      "utf-8",
      (err, content) => {
        if (err) {
          throw err;
        } else {
        }
      }
    );
  }
}
module.exports = User;
