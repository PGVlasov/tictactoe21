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
      return new Promise((resolve, reject)=>{

      })

      }

  }
}
module.exports = User;
