const fs = require("fs");
const path = require("path");

class User {
  constructor(name, age, adress) {
    (this.name = name),
      (this.age = age),
      (this.adress = adress),
      (this.id = Math.random());
  }

  async save() {
    const user = await User.getAll();
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "user.json"),
        "utf-8",
        (err, content) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(content));
          }
        }
      );
    });
  }
}
module.exports = User;
