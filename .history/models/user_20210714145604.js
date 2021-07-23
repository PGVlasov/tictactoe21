const { Schema, model } = require("mongoose");

const user = new Schema({
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

async save() {
    const courses = await Course.getAll()
    courses.push(this.toJSON())

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'courses.json'),
        JSON.stringify(courses),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })

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
