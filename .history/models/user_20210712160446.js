const fs = require("fs");
const path = require("path");

class User {
  constructor(name, age, adress) {
    (this.name = name), (this.age = age), (this.adress = adress);
  }

  toJSON() {
    return {
      name: req.body.name,
      age: req.body.age,
      adress: req.body.adress,
    };
  }

  async save() {
    const user = new User();
    user.push(this.toJSON());

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "user.json"),
        JSON.stringify(user),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
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
