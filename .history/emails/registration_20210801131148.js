const keys = require("../keys/index");

module.exports = function (email) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: "аккаунт создан",
    html: `
    <h1>Добро пожаловать<h1>

    <p>Вы успешно создали аккаунт с email - ${email}</p>
    <hr />
    <a href = "${keys.BASE_URL}">магазин курсов</a>
    `,
  };
};
